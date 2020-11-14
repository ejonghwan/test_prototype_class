
function Tab(props) {
    this.init(props)
    this.event()
}

Tab.prototype.init = function(props) {
    
    this.el = document.querySelector(props.el);
    this.btns = this.el.querySelectorAll(props.btns);
    this.boxs = this.el.querySelectorAll(props.boxs);
    // console.log(props.el, props.btns, props.boxs)

}

Tab.prototype.event = function() {
    // var self = this;
    for(var i = 0; i < this.btns.length; i++){ 
        (function(index){
            this.btns[index].onclick = function(e){
                e.preventDefault();
                this.activation(index, this.btns);
                this.activation(index, this.boxs);
            }.bind(this)
        }.bind(this))(i);  
    }
}

Tab.prototype.activation = function(activeNum, items) {
    console.log(items)
    for(var k=0; k < items.length; k++){
        items[k].className="";
    }
    items[activeNum].classList.add("on");
}

