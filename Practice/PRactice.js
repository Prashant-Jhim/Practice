var Collect = []
function Graph(v){
    this.vertices = v 
    this.addEdge = addEdge 
    this.edges = 0
    this.bfs = bfs 
    this.adj = []
    this.edgeTo = []
    this.marked = []
    for (let i = 0 ; i < this.vertices;i++){
        this.adj[i] = []
        this.adj[i].push('')
    }
    for (let i = 0 ; i < this.vertices;i++){
        this.marked[i] = false
    }
   
}
function addEdge(v,u){
    this.adj[v].push(u)
    this.adj[u].push(v)
    this.edges++
}
function bfs(v){
    this.marked[v] = true
    var Queue = []
    Queue.push(v)
    while(Queue.length != 0){
        var Element = Queue.splice(0,1)
        var Index = Element[0]
        if (Index == undefined){
            console.log(`${Index} is been Visited`)
        }
        for (let i = 0 ; i < this.adj[Index].length;i++){
            if (this.marked[this.adj[Index][i]] == false){
                this.marked[this.adj[Index][i]] = true
                this.edgeTo[this.adj[Index][i]] = Index
                Queue.push(this.adj[Index][i])
            }
        }
    }
}
var Data = new Graph(5)
Data.addEdge(0,1)
Data.addEdge(0,2)
Data.addEdge(1,3)
Data.addEdge(2,4)
console.log(bfs(0))
console.log(Collect)