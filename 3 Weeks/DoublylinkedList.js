function Node(element){
    this.element = element 
    this.next = null
    this.Prev = null
}
function LList(){
    this.head = new Node('head')
    this.find = find
    this.FindPart = FindPart 
    this.insert = insert 
    this.display = display 
    this.BackWard =BackWard
    this.Forward = Forward
    this.FindLast = FindLast 
    this.DispPrev = DispPrev
    this.advance = advance
    this.back = back 
}

function find(item){
    var CurrNode = this.head
    while (CurrNode.element != item){
        CurrNode = CurrNode.next
    }
    return CurrNode
}
function FindLast(){
    var Current = this.head
    while(Current.next != null){
        Current = Current.next
    }
    return Current
}
function insert(NewElement,Item){
    var NewNode = new Node(NewElement)
    var Current = this.find(Item)
    NewNode.next = Current.next
    NewNode.Prev = Current
    Current.next = NewNode
    

}
function FindPart(item){
    var CurrNode = this.head
    while (CurrNode.next != null){
        if (CurrNode.next.element == item){
            CurrNode = CurrNode.next
            return CurrNode
        }
        CurrNode = CurrNode.next
    }
}
function Forward(item){
    var Current = this.FindPart(item)
    while (Current.next != null){
        console.log(Current.next.element)
        Current = Current.next
    }
}

function BackWard(item){
    var Current = this.FindPart(item)
    while(Current.Prev != null){
        if (Current.Prev.element == 'head'){
            break
        }
        console.log(Current.Prev.element)
        
        Current = Current.Prev
    }
}
function display(){
    var CurrNode = this.head
    while(CurrNode.next != null){
        console.log(CurrNode.next.element)
        CurrNode = CurrNode.next
    }
}
function DispPrev(){
    var First = this.head
    var CurrNode = this.FindLast()
    while(CurrNode.Prev != null){
        if (CurrNode.Prev.element == First.element){
            break
        }
        console.log(CurrNode.Prev.element)
        CurrNode = CurrNode.Prev
        
    }
}
function advance(n){
    var Numbers = parseInt(n)
    var CurrNode = this.head
    for (let i = 0 ; i < Numbers ; i++){
        console.log(CurrNode.next.element)
        CurrNode = CurrNode.next
        
    }
}
function back(n){
    var Numbers = parseInt(n)
    var CurrNode = this.FindLast()
    for (let i = 0 ; i < Numbers ; i++){
        console.log(CurrNode.element)
        CurrNode = CurrNode.Prev
    }
}
var New = new LList()
New.insert('Prashant','head')
New.insert("Akash",'Prashant')
New.insert("Ajay",'Akash')
New.insert('Karan','Ajay')
New.BackWard('Ajay')
console.log('\n')
New.Forward('Akash')
console.log('\n')
New.DispPrev()
console.log('\n')
New.advance(2)
console.log('\n')
New.back(2)
