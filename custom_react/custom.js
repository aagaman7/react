//render garney function - react app ko afnei huncha
function customRender(reactElement,mainContainer){
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
       domElement.setAttribute(prop,reactElement.props[prop])
    }
    mainContainer.appendChild(domElement)
}

//react function jasto banako
const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click Me To Visit Google'
}
const mainContainer=document.querySelector('#root')

//render and displaying the element
customRender(reactElement,mainContainer)