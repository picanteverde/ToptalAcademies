function createElement (elementName, attributes, childs){
  return {
    elementName: elementName,
    attrs: attributes,
    childs: childs,
    _addChild: function(child){
      if(!this.childs){
        this.childs = [];
      }
      this.childs.push(child);
    }
  };
}

function renderTree(element){
  var vdomRep = {
    element: element.elementName,
    attrs: element.attrs
  };
  if (element.childs && element.childs.length){
    vdomRep.childs = element.childs.map(function(child){
      if(typeof(child) === "string"){
        return child;
      }else{
        return renderTree(child);
      }
    });
  }
  return vdomRep;
}

function renderHTML(node){
  var ret;
  if (typeof(node) === 'string'){
    ret = node;
  }else {
    ret = '<';
    ret += node.element;
    if (node.attrs){
      ret += ' ' + Object.keys(node.attrs).map(function(attrName){
        return attrName + '="' + node.attrs[attrName] + '"';
      }).join(' ');
    }
    ret += '>\n';
    if(node.childs){
      ret += node.childs.map(function(child){
        return renderHTML(child);
      }).join('\n');
    }
    ret += '\n</' + node.element + '>';
  }
  return ret;
}

var vDomDiv = createElement('div',
{
  'class': 'link'
});

console.log(renderTree(vDomDiv));

vDomDiv._addChild(createElement('h1',null, ['List']));
vDomDiv._addChild(createElement('div',null,[
  createElement('a',{href: '#'},['link1']),
  createElement('a',{href: '#'},['link2']),
  createElement('a',{href: '#'},['link3']),
  createElement('a',{href: '#'},['link4']),
]));

//console.log(renderTree(vDomDiv));

//console.log(renderHTML(renderTree(vDomDiv)));

//document.write(renderHTML(renderTree(vDomDiv)));
