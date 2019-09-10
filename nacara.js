const standard = require('nacara/dist/layouts/standard/Export').default;
const mdMessage = require('nacara/dist/js/utils').mdMessage;
const React = require('react');
const prelude = require('nacara/dist/layouts/standard/Prelude');
const markdown = require('nacara/dist/js/utils').markdown;

const demoLayout = (model, pageContext) => {
    return new Promise((resolve, reject) => {

        // Use the markdown converter exposed by your F# layout
        const html = { __html: markdown(pageContext.Content, model.Config.Plugins.Markdown) };

        const content =
            <div>
                <div className="content container is-hidden-touch">
                    <div dangerouslySetInnerHTML={html} />
                </div >

                <section className="hero is-fullheight has-text-centered is-hidden-desktop">
                    <div className="hero-body">
                        <div className="container">
                            <article className="message is-danger">
                                <div className="message-header">
                                    <p>Unsupported device</p>
                                </div>
                                <div className="message-body">
                                    Sorry, the demo is only availble from a desktop
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                {/* Add dummy navigation buttons to avoid menu.js to crash, to fix in Nacara */}
                <div className="navigate-to-previous"></div>
                <div className="navigate-to-next"></div>
            </div>;

        // Re-use existing base page (writting in F#)
        const page = prelude.basePage(model, pageContext.Attributes.Title, content);
        resolve(page);
    })
}

module.exports = {
    // ...
    layouts: {
        default: standard.Default,
        changelog: standard.Changelog,
        demo: demoLayout // Add your layout here
    },
    // ...
}

module.exports = {
    githubURL: "https://github.com/thoth-org/Thoth.Elmish.FormBuilder",
    url: "https://thoth-org.github.io/",
    source: "docs",
    output: "docs_deploy",
    baseUrl: "/Thoth.Elmish.FormBuilder/",
    editUrl: "https://github.com/thoth-org/Thoth.Elmish.FormBuilder/edit/master/docs",
    title: "Thoth.Elmish.FormBuilder",
    debug: true,
    version: "0.3.0",
    navbar: {
        showVersion: true,
        links: [
            {
                href: "/Thoth.Elmish.FormBuilder/index.html",
                label: "Documentation",
                icon: "fas fa-book"
            },
            {
                href: "/Thoth.Elmish.FormBuilder/changelog.html",
                label: "Changelog",
                icon: "fas fa-tasks"
            },
            {
                href: "https://gitter.im/fable-compiler/Fable",
                label: "Support",
                icon: "fab fa-gitter",
                isExternal: true
            },
            {
                href: "https://github.com/thoth-org/Thoth.Elmish.FormBuilder",
                icon: "fab fa-github",
                isExternal: true
            },
            {
                href: "https://twitter.com/MangelMaxime",
                icon: "fab fa-twitter",
                isExternal: true,
                color: "#55acee"
            }
        ]
    },
    lightner: {
        backgroundColor: "#FAFAFA",
        textColor: "",
        themeFile: "./paket-files/grammars/akamud/vscode-theme-onelight/themes/OneLight.json",
        grammars: [
            "./paket-files/grammars/ionide/ionide-fsgrammar/grammar/fsharp.json",
        ]
    },
    layouts: {
        default: standard.Default,
        changelog: standard.Changelog,
        demo: demoLayout
    },
    plugins: {
        markdown: [
            {
                path: 'markdown-it-container',
                args: [
                    'warning',
                    mdMessage("warning")
                ]
            },
            {
                path: 'markdown-it-container',
                args: [
                    'info',
                    mdMessage("info")
                ]
            },
            {
                path: 'markdown-it-container',
                args: [
                    'success',
                    mdMessage("success")
                ]
            },
            {
                path: 'markdown-it-container',
                args: [
                    'danger',
                    mdMessage("danger")
                ]
            },
            {
                path: 'nacara/dist/js/markdown-it-anchored.js'
            },
            {
                path: 'nacara/dist/js/markdown-it-toc.js'
            }
        ]
    }
};
