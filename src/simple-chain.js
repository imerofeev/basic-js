const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if(typeof (position)!== 'number') {
      this.chain = [];
      throw new Error();
    }
    if(position - 1 < 0 || position - 1 >= this.getLength()) {
        this.chain = [];
        throw new Error();
    }
    this.chain.splice(--position, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let tempChain = '';
    for(let i = 0; i < this.chain.length; i++){
      if(i<this.chain.length - 1) {
        tempChain+= '( ' + this.chain[i] + ' )' + '~~';
      }
      else {
        tempChain+= '( ' + this.chain[i] + ' )';
      }
    }
    this.chain=[];
    return tempChain;
  }
};

module.exports = chainMaker;
