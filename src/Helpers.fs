namespace Thoth.Elmish.FormBuilder

module internal Helpers =

    open Browser.Dom

    /// Add the provided `css` to the page if not already added
    let appendStyle (id : string) (css : string) =
        if isNull (document.getElementById(id)) then
            let node = document.createElement "style" :?> Browser.Types.HTMLStyleElement
            node.textContent <- css
            node. ``type`` <- "text/css"
            node.id <- id

            document.head.appendChild(node)
            |> ignore
