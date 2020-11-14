
  
class Tab {
    constructor(props) {
        this.init(props);
        this.event();
    }

    init(props) {
        console.log(props)
        this.el = document.querySelector(props.el);
        this.btns = this.el.querySelectorAll(props.btns);
        this.boxs = this.el.querySelectorAll(props.boxs);
    }

    event() {
        for(var i = 0; i < this.btns.length; i++){ 
            (function(index){
                this.btns[index].onclick = function(e){
                    e.preventDefault();
                    // console.dir(typeof this.activate)
                    this.activation(index, this.btns);
                    this.activation(index, this.boxs);
                }.bind(this)
            }.bind(this))(i);  
        }
    }

    activation(activeNum, items) {
        // console.log(items)
        for(var k=0; k < items.length; k++){
            items[k].className="";
        }

        items[activeNum].classList.add("on");
        }
}
