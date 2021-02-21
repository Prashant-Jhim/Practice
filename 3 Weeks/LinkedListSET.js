function Node(element){
    this.element = element
    this.next = null
    this.prev = null 
}
function LinkedList(){
    this.head = new Node('head')
    this.insert = insert 
    this.find = find 
    this.Show = Show 
    this.ShowDatas = ShowDatas
}
function find(data){
    var CurrNode = this.head
    while(CurrNode.element != data){
        CurrNode = CurrNode.next
    }
    return CurrNode
}
function ShowDatas(data){
    var Finded = this.find(data)
    return Finded.element
}
function insert(NewElement,Prev){
    var NewNode = new Node(NewElement)
    var Current = this.find(Prev)
    NewNode.next = Current.next
    NewNode.prev = Current
    Current.next = NewNode
}
function Show(){
    var currNode = this.head;
    var Arr = []
    while (!(currNode.next == null)) {
        Arr.push(currNode.next.element);
        currNode = currNode.next;
}
return Arr

}
function Set(){
    this.data = new LinkedList()
    this.dataStore = ['head']
    this.add = add 
    this.contains = contains 
    this.show = show
    this.gives = this.data.Show()
}
function show(){
     
    for (let i = 1 ; i < this.dataStore.length;i++ ){
        console.log(this.dataStore[i])
    }
}
function add(data){
    var n = 0
    this.data.insert(data,this.dataStore[n])
    this.dataStore.push(data)
    n++

}
function contains(data){
    var Found = this.data.ShowDatas(data)
    if (Found == data){
        return true
    }
    else {
        return false
    }
}
var set = new Set()
var HowMany = parseInt(prompt('How Many Values'))
for (let i = 0 ; i < HowMany;i++){
    var Input = prompt('Enter The Name of Student')
    var Input = Input.toLowerCase()
    set.add(Input)
}
var finds = prompt('Enter the name ')
var finds = finds.toLowerCase()
console.log(set.contains(finds))
console.log(set.gives)