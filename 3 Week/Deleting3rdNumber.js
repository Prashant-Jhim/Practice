function node(element){
    this.element = element 
    this.next = null 
    this.back = null 
}
function LList(){
    this.head = new node(1)
    this.find = find 
    this.insert = insert 
    this.display = display
    this.remove = remove 
    this.Remove = Remove 
    this.FindLast = FindLast
   
}
function Remove(){
    var CurrNode = this.head 
    var Arrays = []
    while (Arrays.length != 1){
        for (let i = 0 ; i< 2 ;i++){
            CurrNode = CurrNode.next
        }
        if (CurrNode.element != null){
            this.remove(CurrNode.element)
        }
        if (CurrNode.element == null){
            Arrays.push(1)
            break
        }
        if (CurrNode.next != null){
            CurrNode = CurrNode.next
        }
        if (CurrNode.next == null){
            Arrays.push(1)
            break
        }
        
        
    }

}
function FindLast(){
    var Last = this.head 
    while(Last.next != null){
        Last = Last.next
    }
    return Last
}
function find(item){
    var CurrNode = this.head 
    while(CurrNode.element != item){
        CurrNode = CurrNode.next
    }
    return CurrNode
}
function insert(NewElement,item){
    var NewNode = new node(NewElement)
    var Current = this.find(item)
    NewNode.next = Current.next
    NewNode.back = Current
    Current.next = NewNode
}
function display(){
    var CurrNode = this.head 
    while(CurrNode.next != null &&CurrNode.next != this.head){
        console.log(CurrNode.element)
        CurrNode = CurrNode.next 
    }
    
}
function remove(item){
    var CurrNode = this.find(item)
    if (CurrNode.next != null && CurrNode.back != null){
        CurrNode.back.next = CurrNode.next
    }
}
var List = new LList()
for (let i = 2 ; i <= 40;i++){
    List.insert(i,i-1)
}



List.Remove()
List.display()
