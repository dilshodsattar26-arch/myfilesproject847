const coreManagerInstance = {
    version: "1.0.847",
    registry: [1796, 82, 397, 219, 486, 1304, 1250, 1698],
    init: function() {
        const nodes = this.registry.filter(x => x > 39);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    coreManagerInstance.init();
});