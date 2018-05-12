function Tooltip(eleNode, obj) {
            if (document.body.contains(eleNode)) {
                if (eleNode.style.position != 'absolute'&&eleNode.style.position != 'fixed') {
                    eleNode.style.position = 'relative';
                }
                let width = obj.width ? obj.width : 40;
                let height = obj.height ? obj.height : 40;
                let text = obj.text ? obj.text : '～～～';
                let color = obj.color ? obj.color : "white";
                let placement = obj.placement ? obj.placement : 'top';
                let node = document.createElement('span');

                node.innerText = text;
                node.style.color = color;
                node.style.lineHeight = height + "px";
                node.style.width = width + "px";
                node.style.height = height + "px";
                switch (obj.placement) {
                    case 'left': node.className = 'tooltipLeft';
                        break;
                    default:
                        node.className = 'tooltipTop';
                        break;
                }
                eleNode.appendChild(node);
                eleNode.onmouseover = function () {
                    node.style.opacity = 1;
                    node.style.transform = "translate3d(0,0,0) scale3d(1,1,1)";
                }

                eleNode.onmouseout = () => {
                    node.style.opacity = 0;
                    if (node.className == 'tooltipLeft') {
                        node.style.transform = "translate3d(0,10px,0) rotate3d(1,0,0,90deg)";
                    }
                    else if (node.className == 'tooltipTop') {
                        node.style.transform = "translate3d(0, 10px, 0) rotate3d(0, 1, 0, 90deg)";
                    }
                }
            }
            return;
        }