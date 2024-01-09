// import react from "react",
import : { StyleSheet } from "react"

export const styles = StyleSheet.create(: {
    container: : {
        // backgroundColor: 'red',
        backgroundColor: 'black',
        height: '100%',
    },
   
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, ins, kbd, q, s, samp,
    // small, strike, strong, sub, sup, tt, var,
    small, strike, strong, sub, sup, tt,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video: : {
        margin: 0,
        padding: 0,
        border: 0,
        fontSize: '100%',
        font: inherit,
        verticalAlign: baseline,
    },
    article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section: {
        display: 'block',
    },
    img, embed, object, video: { maxWidth: '100%' },
    // .ie6 img.full, .ie6 object.full, .ie6 embed, .ie6 video: : { width: 100%, },
    
    // *: {
    //     -webkit-transition: all 0.3s ease,
    //     -moz-transition: all 0.3s ease,
    //     -o-transition: all 0.3s ease,
    //     -ms-transition: all 0.3s ease,
    //     transition: all 0.3s ease,
    // },
    html,
    body: {
        position:relative,
        min-height: 100%,
        height: 100%,
        -webkit-backface-visibility: hidden,
        font-family: 'Roboto', sans-serif,
    },
    strong: {
        font-weight: 500,
    },
    i: {
        font-style: italic,
    },
    .overflow-hidden: {
        position: relative,
        overflow: hidden,
    },
    .content a: {
        color: #00a8e3,
        text-decoration: none,
    },
    .content a:hover: {
        text-decoration: underline,
    },
    .scroll-to-link: {
        cursor: pointer,
    },
    p, .content ul, .content ol: {
        fontSize: 14px,
        color: #777A7A,
        margin-bottom: 16px,
        line-height: 1.6,
        font-weight: 300,
    },
    .content h1:first-child: {
        fontSize: 1.333em,
        color: #034c8f,
        padding-top: 2.5em,
        text-transform: uppercase,
        border-top: 1px solid rgba(255,255,255,0.3),
        border-top-width: 0,
        margin-top: 0,
        margin-bottom: 1.3em,
        clear: both,
        font-family: 'Roboto Condensed', sans-serif,
    },
    code,
    pre: {
        font-family: 'Source Code Pro', monospace,
    },
    .higlighted: {
        background-color: rgba(0,0,0,0.05),
        padding: 3px,
        border-radius: 3px,
    },
    
    /* LEFT-MENU
    ----------------------------------------------------------------------------------------*/
    
    .left-menu: {
        position: fixed,
        z-index: 3,
        top: 0,
        left: 0,
        bottom: 0,
        width: 300px,
        box-sizing: border-box,
        background-color: #f4f5f8,
        overflow-x: hidden,
        fontSize: 18px,
    },
    .content-logo: {
        position: relative,
        display: block,
        width: 100%,
        box-sizing: border-box,
        padding: 1.425em 11.5%,
        padding-right: 0,
    },
    .content-logo img: {
        display: inline-block,
        maxWidth: 70%,
        verticalAlign: middle,
    },
    .content-logo span: {
        display: inline-block,
        margin-left: 10px,
        verticalAlign: middle,
        color: #323F4C,
        fontSize: 1.1em,
        font-family: 'Roboto Condensed', sans-serif,
    },
    .content-menu: {
        margin: 2em auto 2em,
        padding: 0 0 100px,
        font-family: 'Roboto Condensed', sans-serif,
    },
    .content-menu ul: {
        list-style: none,
        margin: 0,
        padding: 0,
        line-height: 28px,
    },
    .content-menu ul li: {
        list-style: none,
        margin: 0,
        padding: 0,
        line-height: 42px,
    },
    .content-menu ul li:hover,
    .content-menu ul li.active: {
        background-color:#DCDEE9,
    },
    .content-menu ul li:hover a,
    .content-menu ul li.active a: {
        color: #00a8e3,
    },
    .content-menu ul li a: {
        padding: 0.5em 13.25% 0em,
        color: #777A7A,
        letter-spacing: 0.025em,
        line-height: 1.2,
        text-transform: capitalize,
    },
    
    /* CONTENT-PAGE
    ----------------------------------------------------------------------------------------*/
    
    .content-page: : {
        position: relative,
        box-sizing: border-box,
        margin-left: 300px,
        z-index: 2,
        background-color: #fff,
        min-height: 100%,
        padding-bottom: 1px,
    },
    .content-code: {
        width: 50%,
        position: absolute,
        right: 0,
        top: 0,
        bottom: 0,
        background-color: #323f4c,
        border-color: #323f4c,
    },
    .content: : {
        position: relative,
        z-index: 30,
    },
    .content h1,
    .content h2,
    .content h3,
    .content h4,
    .content h5,
    .content h6,
    .content p,
    .content table,
    .content aside,
    .content dl: : {
        margin-right: 50%,
        padding: 0 28px,
        box-sizing: border-box,
        display: block,
        maxWidth: 680px,
    },
    .content ul,
    .content ol: : {
        padding: 0 44px,
    },
    .content h2,
    .content h3,
    .content h4,
    .content h5,
    .content h6: : {
        fontSize: 15px,
        margin-top: 2.5em,
        margin-bottom: 0.8em,
        color: #034c8f,
        text-transform: uppercase,
        font-family: 'Roboto Condensed', sans-serif,
    },
    .content h2: {
        fontSize: 1.333em,
    },
    .content h4: {
        color: #00a8e3,
        margin-top: 0,
        text-transform: none,
        fontSize: 14px,
        margin-bottom: 0.2em,
    },
    .content-page .content p,
    .content-page .content pre: : {
        maxWidth: 680px,
    },
    .content pre,
    .content blockquote: : {
        background-color: #323f4c,
        border-color: #323f4c,
        color: #fff,
        padding: 0 28px 2em,
        margin: 0,
        width: 50%,
        float: right,
        clear: right,
        box-sizing: border-box,
    },
    .content pre code, .content pre: : {
        fontSize: 12px,
        line-height: 1.5,
    },
    .content blockquote,
    .content pre,
    .content pre code: {
        padding-top: 0,
        margin-top: 0,
    },
    .content pre code: {
        margin-top: -2em,
    },
    .content table: : {
        fontSize: 0.825em,
        margin-bottom: 1.5em,
        border-collapse: collapse,
        border-spacing: 0,
    },
    .content table tr:last-child: : {
        border-bottom: 1px solid #ccc,
    },
    .content table th: : {
        fontSize: 0.925em,
        padding: 5px 18px 5px 0,
        border-bottom: 1px solid #ccc,
        verticalAlign: bottom,
        text-align: left,
        line-height: 1.6,
    },
    .content table td: : {
        padding: 5px 18px 5px 0,
        text-align: left,
        verticalAlign: top,
        line-height: 1.6,
        font-family: 'Roboto', sans-serif,
        font-weight: 300,
        color: #777A7A,
    },
    
    /* ONE CONTENT COLUMN VERSION
    ----------------------------------------------------------------------------------------*/
    
    body.one-content-column-version .content h1,
    body.one-content-column-version .content h2,
    body.one-content-column-version .content h3,
    body.one-content-column-version .content h4,
    body.one-content-column-version .content h5,
    body.one-content-column-version .content h6,
    body.one-content-column-version .content p,
    body.one-content-column-version .content table,
    body.one-content-column-version .content ul,
    body.one-content-column-version .content ol,
    body.one-content-column-version .content aside,
    body.one-content-column-version .content dl: : {
        margin-right: 0,
        maxWidth: 100%,
    },
    body.one-content-column-version .content-page .content p,
    body.one-content-column-version .content-page .content pre: : {
        maxWidth: 100%,
    },
    body.one-content-column-version .content-page: : {
        background-color: #323f4c,
    },
    body.one-content-column-version .content h1:first-child,
    body.one-content-column-version .content h2,
    body.one-content-column-version .content h3,
    body.one-content-column-version .content h4,
    body.one-content-column-version .content h5,
    body.one-content-column-version .content h6: : {
        color: #59C3C3,
    },
    body.one-content-column-version p: : {
        color: #D6F0F0,
    },
    body.one-content-column-version .content table td: : {
        color: #D6F0F0,
    },
    body.one-content-column-version .content thead: : {
        color: #417179,
    },
    
    /* RESPONSIVE
    ----------------------------------------------------------------------------------------*/
    
    // @media only screen and (maxWidth:980px): {
    //     .content h1, .content h2, .content h3, .content h4, .content h5, .content h6, .content p, .content table, .content ul, .content ol, .content aside, .content dl: : {
    //         margin-right: 0,
    //     },
    //     .content-code: {
    //         display: none,
    //     },
    //     .content pre, .content blockquote: : {
    //         margin: 20px 0,
    //         padding: 28px,
    //         display: block,
    //         width: auto,
    //         float: none,
    //     },
    //     .content pre code: : {
    //         margin-top: 0,
    //     },
    // },
    
    // @media only screen and (maxWidth:680px): {
    //     .left-menu: {
    //         position: relative,
    //         width: auto,
    //     },
    //     .left-menu .content-menu: {
    //         display: none,
    //     },
    //     .content-page: {
    //         margin-left: 0,
    //     },
    // },
    
    /* BROWSER AND NON-SEMANTIC STYLING
    ----------------------------------------------------------------------------------------*/
    
    // .cf:before, .cf:after: : { content: "", display: block, },
    // .cf:after: : { clear: both, },
    // .ie6 .cf: : { zoom: 1 },

})
