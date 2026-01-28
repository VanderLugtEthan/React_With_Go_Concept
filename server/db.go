package main

import (
    "database/sql"
    "encoding/json"
    "fmt"
    "os"
    _ "github.com/microsoft/go-mssqldb"
)

type BHBrowser struct {
    User     string `json:"user"`
    Password string `json:"password"`
    Database string `json:"database"`
    Server   string `json:"server"`
}

func loadConfig(path string) (BHBrowser, error) {
    var cfg BHBrowser

    data, err := os.ReadFile(path)
    if err != nil {
        return cfg, err
    }

    err = json.Unmarshal(data, &cfg)
    return cfg, err
}

func ConnectDB() (*sql.DB, error) {
    cfg, err := loadConfig("./dbcredentials.json")
    if err != nil {
        return nil, err
    }

    connString := fmt.Sprintf(
        "server=%s;user id=%s;password=%s;database=%s;",
        cfg.Server,
        cfg.User,
        cfg.Password,
        cfg.Database,
    )

    // Open the SQL database connection
    db, err := sql.Open("sqlserver", connString)
    if err != nil {
        return nil, err
    }

    if err := db.Ping(); err != nil {
        return nil, err
    }

    fmt.Println("Connected to MSSQL")
    return db, nil

}

// Select query returns
func dbSelectQuery() {
    // Build the select query using parameters to avoid an SQL injection attack.

}

func dbUpdateQuery() {

}