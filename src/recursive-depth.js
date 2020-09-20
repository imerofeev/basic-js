module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (typeof (arr) !== "object") {
      return 0;
    }
    let max = 0;
    for (let i = 0; i < arr.length; i += 1) {
      if (Array.isArray(arr[i])) {
        let count = this.calculateDepth(arr[i]);
        if(count > max) {
        max = count;
        }
      }
    }
    return max + 1;
}
};