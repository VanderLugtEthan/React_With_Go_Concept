package main

import (
    "log"
    "net/http"
    "github.com/gin-gonic/gin"
)

func main() {
    
    router := gin.Default()

    router.Static("/assets", "../client/dist/assets")
    router.StaticFile("/vite.svg", "../client/dist/vite.svg")
    router.LoadHTMLFiles("../client/dist/index.html")

    // Connect to the database before any APIs are defined as this is required by the compiler
    // err is deffined as a fallback value in the event that the database is unable to connect
    db, err := ConnectDB()
    if err != nil {
        panic(err)
    }
    _ = db // avoid unused variable for now

    log.Println(db.Ping())

    // API Calls should be stored here. Try to keep unrelated calls seperate
    api := router.Group("/api")
    {
        
        // JSON Handling (used to send responses properly to the client)
        api.Use (func(ctx *gin.Context) {
            ctx.Writer.Header().Set("Access-Control-Allow-Origin", "*")
            ctx.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
            ctx.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
            ctx.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

            if ctx.Request.Method == "OPTIONS" {
                ctx.AbortWithStatus(204)
                return
            }
            ctx.Next()
        })

        
        api.GET("/hello", func(ctx *gin.Context) {
            ctx.JSON(http.StatusOK, gin.H{"message": "Hello from Some other guy!"})
        })

        api.GET("/selectprinters", func(ctx *gin.Context) {
            query := `
            SELECT UserID, Computername, PrinterType, PrinterName, PlantLocatn, Notes, ID
            FROM PrinterNamesBak
            WHERE UserID = 'GRODYS';
            `
            rows, err := db.Query(query)
            
            if err != nil {
                ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
                return
            }
            defer rows.Close()

            type Printer struct {
                UserID       *string `json:"userID"`
                Computername *string `json:"computername"`
                PrinterType  *string `json:"printerType"`
                PrinterName  *string `json:"printerName"`
                PlantLocatn  *string `json:"plantLocation"`
                Notes        *string `json:"notes"`
                ID           int    `json:"id"`
            }

            var printers []Printer

               for rows.Next() {
                    var p Printer
                    err = rows.Scan(&p.UserID, &p.Computername, &p.PrinterType, &p.PrinterName, &p.PlantLocatn, &p.Notes, &p.ID)
                    if err != nil {
                        ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
                        return
                    }
                    printers = append(printers, p)
                }

            ctx.JSON(http.StatusOK, printers)

        })
    }

    router.NoRoute(func(ctx *gin.Context) {
        ctx.HTML(http.StatusOK, "index.html", nil)
    })

    log.Println("Server is running at http://localhost:8080")
    router.Run(":8080")
}

