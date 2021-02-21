var Back = []
var Actual = []
var locations = []
locations['pachranga'] = 0
locations['kotli'] = 1.5
locations['jamalpur'] = 1.5 + 1.9
locations['sudana'] = 1.5 + 1.9 + 2.7
var KeysOfLoca = Object.keys(locations)
function Graph(v){
   this.vertices = v   
   this.edges = 0
   this.edgeTo = []
   this.adj = []
   for (let i = 0 ; i < this.vertices ; i++){
      this.adj[i] = []
      this.adj[i].push('')
   }
   this.addEdge = addEdge 
   this.Marked = []
   
   for (let i = 0 ; i < this.vertices ; i++){
      this.Marked[i] = false
   }
   this.dfs = dfs 
   this.pathTo = pathTo
   this.hasPathTo = hasPathTo
   this.bfs = bfs 
   this.showGraph = showGraph
}
function pathTo(v){
   var Source = 0
   if (this.hasPathTo(v) ==false){
      return undefined
   }
   var Path = []
   for (let i = v ; i != Source ; i = this.edgeTo[i]){
      Path.push(i)
   }
   Path.push(Source)
   return Path

}
function hasPathTo(v){
   return this.Marked[v]
}
function bfs(v){
   this.Marked[v] = true
   var Queue = []
   Queue.push(v)
   while(Queue.length > 0){
      var Element = Queue.splice(0,1)
      var Index = Element[0]
      if (Index != undefined){
         console.log(`${Index} is Been Visited`)
      }
      this.adj[Index].forEach(i => {
         if (this.Marked[i] == false){
            this.edgeTo[i] = Index
            this.Marked[i] = true
            Queue.push(i)
         }
         
         
      });

   }
}
function showGraph(){
   for (let i = 0 ; i < this.vertices;i++){
       for (let j = 0 ; j < this.vertices;j++){
           if (this.adj[i][j] != undefined){
              if (this.adj[i][j] != ''){
               console.log(i +' ==>' + this.adj[i][j] +' ')
              }
           }
       }
       console.log('\n')
   }
}
function dfs(v){
   this.Marked[v] = true 
   if (this.adj[v] != undefined){
      console.log(`${v} is Been Visted`)
   }
   this.adj[v].forEach(element => {
      if (this.Marked[element] == false){
         this.dfs(element)
      }
      
   });
}   
function addEdge(v,w){
   this.adj[v].push(w)
   this.adj[w].push(v)
   this.edges++
}
var g = new Graph(KeysOfLoca.length);
g.addEdge(locations['pachranga'],locations['kotli'])
g.addEdge(locations['kotli'],locations['jamalpur'])
g.addEdge(locations['jamalpur'],locations['sudana'])
var Paths = g.pathTo(4)
while(Paths.length > 0){
   if (Paths.length > 1){
      Back.push(Paths.pop())
   }
   else {
      Back.push(Paths.pop())
   }
}
for (let i = Back.length - 1 ; i > -1 ;i--){
   Actual.push(Back[i])
}
var ACtual = Actual.reduceRight((a,b)=>{
   
   return a + '-' + b
})
console.log(ACtual)