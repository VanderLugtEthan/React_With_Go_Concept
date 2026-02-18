import styles from '../style/GoReact.module.css'

// Component imports
import GuideText from '../components/GuideText.jsx'
import TextBoxInput from '../components/TextBoxInput.jsx'
import CountButton from '../components/CountButton.jsx'

// Image imports here
import { react, nodedown, create, config, mainjsx, appjsx, router, subpage } from '../images/GoReact'

function GoReact(){
    
    return (
        <div>
            <h1> React Guide </h1>
            <div className={styles.paragraph}>
                This guide will show you how to implement a react frontend on a web-based application<br/><br/>

                <div className={styles.center}>
                    <img src={react} alt="React Logo"></img><br/><br/>
                </div>
                
                React.JS is a JavaScript library used to build web-based user interfaces. Its primary use is to 
                simplify the process of building the frontend application by effectively creating “building blocks” 
                using JavaScript code to dynamically build HTML content. This allows the website to REACT to changes 
                based on certain circumstances (such as user events, time, etc.). <br/><br/>
                
                React source code is not readable by a web browser, but it’s able to be compiled into standard JavaScript, 
                HTML, and CSS code. This guide will help you understand how a website using react can be developed, 
                compiled, and distributed using a backend such as GO. (NOTE: Node.js is still used for development 
                but is no longer being run as the backend). <br/><br/>
                
                Advantages of React.JS development:       
                <ul>
                    <li>
                    Just in Time (JIT) compilation: When running the development server, any changes to a react component 
                    will automatically compile, and be viewable by the developer.
                    </li>

                    <li>
                    Compiled code into one file: React code compiles into JavaScript and CSS code, which will be used to 
                    enhance a simple index.html file. Due to this, the backend would only have to communicate with this one 
                    file once compiled.
                    </li>

                    <li>
                    Components: Used to dynamically generate content on the webpage: 
                    Node.js functions: Many JavaScript libraries from Node.js work alongside react.js to build simple and 
                    functional applications.
                    </li>

                    <li>
                    UseState and UseEffect. These two methods allow events to be triggered based on user input, time, or 
                    other events. This will allow the webpage to react to these changes, and to update the elements as necessary
                    </li>
                
                </ul>
                <br/>

                <h2>Installation</h2>

                Node.js is a Javascript runtime environment that allows users to run javascript code outside the web 
                browser. It's commonly used for server-side development, but it is also used to build react applications. 
                Node.js provides essential packages for react development, as well as its many tools. <br/><br/>
                
                {/* The target being _blank is responsble for sending the user to a new tab. Without it, your page will be replaced*/}
                Node.js must be installed on the device to use React.js. Installation methods may vary based on the 
                operatijng system that is being used. The official node.js website provides installation instructions
                based on which one is being used. You can find this site <a target="_blank" href="https://nodejs.org/en/download/">here</a> <br/><br/>

                The docker compose file is avaliable at the top of the page. For starters, we will install the node
                application on the bare-metal machine. Make sure that you download the prebuilt node.js for your OS...

                <h4>Figure 1: Download page for the Node.js application</h4>
                <div className={styles.center}>
                    <img src={nodedown} alt= "Node.js Download Page"></img><br/><br/>
                </div>

                For the installation process, you must select the default settings for all of the pages on the wizard.
                Once installed, you can verify the existence of node.js and npm by executing the following commands in
                a terminal... <br/><br/>
                <code>
                    node -v <br/>
                    npm -v <br/>
                </code>
                <br/>

                If both of these commands return a version number, then the installation was a success. We can now move on
                to creating a react project. <br/><br/>

                <h2>Create a React-Based project</h2>

                For the purposes of our application, we will use a framework alongside react known as Vite. Vite is a
                development tool that ehances the already existing development tools for the react application.
                We can create a project using this with the following command... <br/><br/>
                
                <div className={styles.center}>
                    <img src={create} alt="Create React Project"></img><br/><br/>
                </div>

                Be sure to select from the following options when prompted... <br/><br/>

                <div className={styles.center}>
                    <img src={config} alt="Config React Project"></img><br/><br/>
                </div>

                Note that typescript is also an option for a react variant. Feel cree to use it, but forthe purposes of 
                simplicity, this guide will mainly cover the javascript framework instead. <br/><br/>

                <h2>Project Strucutre</h2>
                Now that the main development environment is ready for use, it's time to cover the structure of the project.
                Start by opening the project folder. You should notice the following files... <br/><br/>

                Here is a breif description of what each file/folder is used for... <br/><br/>

                <ul>
                    <li>
                        <b>node_modules</b>: This is a dependency folder for packages installed using npm.
                        It contains the packages that are used for development, and is not used for the final build.
                        Certaqin packages may also contain libraries used for your javascript code just like any other node.js application.
                    </li>

                    <li>
                        <b>public</b>: This folder contains static assets that are served directly to the browser.
                        It includes the main HTML file and any other static resources like images or fonts. The
                        public folder is organized alongside a finsihed react application, and will be placed in a future build folder.
                    </li>

                    <li>
                        <b>src</b>: This folder stores the source dcode for the react application. A final build is compiled based
                        on the code in this folder, and is used to generate the final application.
                    </li>

                    <li>
                        <b>assets</b>: Same purpose as the public folder, but for the development environment. The final build will use this folder
                        to bring static content (such as images) into the final build.
                    </li>

                    <li>
                        <b>package.json</b>: This file contains metadata for the project, and does not affec the final build. The developer usually
                        doesn't need to touch this file, but it is used to manage dependenceies for MPM packages, and to run build scripts.
                        A file known as package-lock.json serves the same purpose, but it's for the dependencies of the packages
                        installed using npm rather than the packages themselves.
                    </li>

                    <li>
                        <b>index.html</b>: This is a template file used by react. The components made by react will be used to build on top of this
                        html document once compiled. It is used to generate the final build, which will use compiled javascript and css code to fill out the template
                    </li>

                    <li>
                        <b>main.jsx</b>: This is the entry point fo rthe react applicatiom. This file is used to render the main App.jsx component, wrapping it around another
                        component used to to manage the application's state (Usually meant for debugging purposes). This file, alongside the rest of your components, will compile into javascript and css code.
                    </li>

                    <li>
                        <b>App.jsx</b>: This is the main application component. It is the root component of your react application, and is rendered by main.jsx. We will use app.jsx alongside a router class, which 
                        is used to direct the component to other components based on the subdirectory specified in the URL.
                    </li>

                    <li>
                        <b>CSS files</b>: Like any other application, CSS files are used to style the webpages for react. A new variant we can use,
                        known as CSS modules, allow us to write CSS code that is only applied to the component that imports it. This allows us to import the CSS
                        code as if it was any other javascript class.
                    </li>
            
                </ul>
                <br/><br/>

                <h2>Main.jsx, App.jsx, and React Routers</h2>
                
                The following two files are the main files used in the react application. App.jsx runs the main component of the application,
                and Main.jsx is used to render App.jsx on top of the root element for debugging purposes. Here is the typical structure of the two files... <br/><br/>

                <h3 style={{textAlign: "center"}}>Main.jsx</h3>
                <div className={styles.center}>
                    <img src={mainjsx} alt="Main.jsx"></img><br/><br/>
                </div>

                This file is typically used for debugging purposes, which renders the App.jsx file on top of another class
                known as StrictMode.
                <h3 style={{textAlign: "center"}}>App.jsx</h3>
                <div className={styles.center}>
                    <img src={appjsx} alt="App.jsx"></img><br/><br/>
                </div>

                Notice the React Router import in the app.jsx file. This is a package used to manage the routing for the
                App's components other than the App.jsx file. This allows us to create a single page application, where the URL
                redirects the user to a seperate component to generate on top of our single page. This is how we can have
                multuple pages on our website with only a single real page. <br/><br/>

                The router class is what we use to seperate these pages, and define subdirectories on the webpage. To use this
                class, you must install the react-router-dom package using the npm package manager. You can run the following 
                command to install it... <br/><br/>
                
                <code>
                    npm install react-router-dom
                </code>

                <br/><br/>

                Once installed, you should import the components from the package on top of the app.jsx file... <br/><br/>
                <code>
                    import {'{'}BrowserRouter as Router, Routes, Route, Link{'}'} from 'react-router-dom';
                </code>

                <br/><br/>
                
                Notice how the Router component is imported. Classes from the component are enclosed in brackets, followed by
                the package name to import only the specific classes we are going to use for the project.<br/><br/>

                The following is a code block showing how the typical react router class can be used to manage the routing for the application...<br/><br/>

                <img src={router} alt="Router"></img><br/><br/>
                
                For most websites without a header, the bottom five lines are usually all you need. The router component
                uses exported components from other parts of the application, and renders them on screen when a certain
                directory of the application is accessed by the user. In the example above, there are three directories:
                the root directory (/), the Sub directory (/sub), and the GoReact directory (/goreact). When the user 
                accesses one of these directories, the component specified in the element field is rendered on top of 
                the main page. <br/><br/>

                The link component is used to create a link to a specific directory. This is mainly used to help the user navigate
                the website, but is not needed if the developer insits on not having a header, navigation bar, or any other way for the 
                user to access a different page. In my case, you can enclose them in a div and treat it as if it was a button 
                (These were used to make the header on this exact page)<br/><br/>
                
                <h2>The Typical Component</h2>
                
                Here is what a typical react component consists of... <br/><br/>
                <div className={styles.center}>
                    <img src={subpage} alt= "Subpage"></img>
                </div>
                
                <br/><br/>

                The compoent consits of a main function (written in PascalCase) that is exported at the end of the file. The function
                returns HTML code that the router (from app.jsx) will pick up and display to the user
                
                This sub class is a simple component that returns a query from a selected database. The implimenation for the backend does
                not change the frontend's implimentation, so I won't mention it here. Two important methods, useState, and useEffect, are used here...<br/><br/>

                <h3 className={styles.center}>useState</h3>

                useState is a simple method used to trigger a change on the webpage. This is mainly done by tracking the state of a variable on the
                webpage throughout its lifetime. When the variable is changed, the webpage will "react" by adjusting its content to fit the current definition.
                The useState method is defined using the following syntax... <br/><br/>

                <ul>
                    <li>
                        const: Constant type. The useState variable is a constant due to its tracking feature never being changed
                    </li>

                    <li>
                        [variable, setVariable]: The variable is the state being tracked, while setVariable is a function 
                        that the developer can call to change the value of that variable
                    </li>

                    <li>
                        useState([]): The useState type is defined to the variable with the useState method.
                        The parameter is the first defintion of the variable (in this case, printers equals an empty array).
                    </li>
                </ul>
                <br/>

                There are many practical use cases for a useState method. Any variable on the program that is expected to change
                after rendering on the webpage should be defined using a useState method. It works asyncronously, so the webpage
                will update this portion of the webpage once it makes that change.<br/><br/>

                <h3 className={styles.center}>useEffect</h3>

                useEffect is a method used to trigger an event based on a change or action on the webpage. This is used to run
                an entire METHOD based on changes to a certain variable, rather than simply changing the variable itself. useEffects
                can be used to change certain portions of the webpage, and is very commonly used to trigger API calls to the backend.
                The useState method is defined using the following syntax... <br/><br/>
                
                <ul>
                    <li>
                        useEffect(param1, param2): The useEffect method is called, and has two parameters. It is asyncronous, meaning it is prone
                        to change during the application's runtime.
                    </li>

                    <li>
                        Function(): A function is called as the first parameter for the useEffect method. Any function with a set amount of parameters
                        can be used, but it's typically used to call the backend API, and change the state of a variable with useState.
                    </li>

                    <li>
                        []: just like the useState parameter, this parameter defines the useEffect's trigger as a varialbe. The variable can be
                        an array of variables indicating the change (you could put [printers] here if the frontend manipulates it later. In that case,
                        useEffect will call the API again). If the parameter is an empty array, the useEffect will only be called once when the component is mounted on the webpage.
                    </li>
                </ul>
                <br/>

                In the example above, the useEffect method is calling an API that fetches a list of printers from the backend, and 
                defines the printers variable to be the list of printers returned by the API call (using the useState method).
                The useEffect method has many use cases, especially when it comes to calling the backend API.<br/><br/>

                One last thing to notice about the component is the return statement. Unlike the typical javascript code, react.js components
                expect HTML code to be returned by the function. This code is used to generate the webpag, and is return to all parent components
                (assuming the router is being used). Some attributes for the HTML page contain a different name compared to the typical HTML code.
                For instance, the class attribute is written as className in react, and the for attribute is written as htmlFor. THe reason for this
                involves the fact that javascript reserves some of these keywords for its own language. <br/><br/>

                <h3 className={styles.center}>Debug Mode & Compilation</h3>

                Whether a build is ready for release, or if the developer wants to test the application in real time, the npm package manager offers two commands
                to preview a working version of the application.<br/><br/>

                <code>
                    npm run dev <br/><br/>
                </code>

                this command will run the application in debug mode. One huge advantage of doing this during development involves its Just-In-Time (JIT) compilation. Any change made
                to the code will automatically apply to the webpage without the need to restart the server in dev mode.<br/><br/>

                <code>
                    npm run build <br/><br/>
                </code>

                This command will compile the application as a final build. This is the version that will be distributed to users, and is used for production. A build folder
                will be generated, containing the compiled code, and any attributes provided by the developer (images, libraries, e.t.c.). 
                <h3 className={styles.center}>Conclusion</h3>

                Aside from what was covered in this guide, there are a wide variety of other libraries and features to be explored. This guide is a good starting point
                regarding the essentials for react.js, and how it can be used to further enhance a Node.js application. Feel free to try out some sample methods I created 
                below that take advantage of these react.js libraries
            </div>
            <br/><br/>

            <h3 className={styles.center}>A text box that prints out exactly what you type: </h3>
            <div className={styles.center}><TextBoxInput/></div>
            <div className={styles.center}><CountButton/></div>
            <div className={styles.center}><GuideText/></div>
        </div>
    )
}

export default GoReact;
