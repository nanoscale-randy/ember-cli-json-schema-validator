module.exports = {
  description: 'Adds JJV Bower package to project',
  normalizeEntityName: function() {},
  afterInstall: function() {
    return this.addBowerPackageToProject('jjv', '1.0.2');
  }
};
