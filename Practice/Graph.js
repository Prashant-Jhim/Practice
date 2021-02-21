function Graph(v){
    this.vertices = v 
    this.edges = 0
    this.adj = []
    for (let i = 0 ; i < this.vertices;i++){
        this.adj[i] = []
        this.adj[i].push('')
    }
    this.edgeTo = []
    this.vertexList = []
    this.addEdge = addEdge 
    this.Marked = []
    this.bfs = bfs 
    this.topSortHelper = topSortHelper
    this.topSort = topSort
    this.dfs = dfs 
    this.showGraph = showGraph 
    for (let i = 0 ; i < this.vertices ; i++){
        this.Marked[i] = false
    }
}
function topSort(){
    var Stack = []
    var Visited = []
    for (var i = 0 ; i < this.vertices;i++){
        Visited[i] = false
    }
    for (var i = 0 ; i < this.vertices ; i++){
        if (Visited[i] == false){
            this.topSortHelper(i,Visited,Stack)
        }
    }
    for (var i = 0 ; i < Stack.length ; i++){
        if (Stack[i] != undefined && Stack[i] != false){
            console.log(this.verticesList[Stack[i]])
        }
    }
    console.log(Stack)
}
function topSortHelper(v,Visited,Stack){
    Visited[v] = true
    this.adj[v].forEach(w => {
        if (Visited[w] == false){
            this.topSortHelper(w,Visited,Stack)
        }
        
    });
    Stack.push(v)
}
    


function bfs(v){
    this.Marked[v] = true 
    var Queue = []
    Queue.push(v)
    while(Queue.length != 0){
        var Element = Queue.splice(0,1)
        var Index = Element[0]
        this.adj[Index].forEach(i => {
            if (this.Marked[i] == false){
                this.Marked[i] = true 
                this.edgeTo[i] = Index
                Queue.push(i)
            }
            
        });
    }
}
function dfs(v){
    this.Marked[v] = true
    if (this.adj[v] != undefined){
        console.log(`Vertex = ${v} is Being Visited`)
    }
    for (let i of this.adj[v]){
        if (this.Marked[i] == false){
            this.dfs(i)
        }
    }
}
function addEdge(v,w){
    this.adj[v].push(w)
    this.adj[w].push(v)
    this.edges++
}
function showGraph() {
    var visited = [];
    for (var i = 0; i < this.vertices; ++i) {
    console.log(this.vertexList[i] + " -> ");
    visited.push(this.vertexList[i]);
    for (var j = 0; j < this.vertices; ++j) {
    if (this.adj[i][j] != undefined) {
    if (visited.indexOf(this.vertexList[j]) < 0) {
   console.log(this.vertexList[j] + ' ');
    }
    }
    }
    console.log();
    visited.pop();
    }
    }
var g = new Graph(6);
g.addEdge(1,2);
g.addEdge(2,5);
g.addEdge(1,3);
g.addEdge(1,4);
g.addEdge(0,1);
g.vertexList = ['Prashant','Akash','karan','bipan','simran','harleen']

g.topSort()