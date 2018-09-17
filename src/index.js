class Sorter {
  constructor() {
    this.items = [];
    this.numberComparator = (first, second) => {
      return first - second;
    };
  }

  add(element) {
    this.items.push(element);
  }

  at(index) {
    return this.items[index];
  }

  get length() {
    return this.items.length;
  }

  toArray() {
    return [...this.items];
  }

  sort(indices) {
    if (!indices || indices.length < 2) return;

    const items = indices.map(index => this.items[index]);
    indices.sort(this.numberComparator);
    const comparator = this.comparator ? this.comparator : this.numberComparator;
    items.sort((first, second) => {
      return comparator(first, second);
    });
    indices.forEach((index, ind) => {
      this.items[index] = items[ind];
    });
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;
