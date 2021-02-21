function Node(data,left,right){
    this.data = data 
    this.left = left 
    this.right = right 
    this.show = show 
 }
 function show(){
    return this.data
 }
 function BST(){
    this.root = null 
    this.insert = insert 
    this.find = find 
    this.InOrder = InOrder 
    this.PreOrder = PreOrder 
    this.PostOrder = PostOrder 
    this.GetMin = GetMin 
    this.GetMax = GetMax 
 }
 function insert(data){
    var n = new Node(data,null,null)
    if (this.root == null){
       this.root = n 
    }
    else{
       var Current = this.root
       var Parent;
       while(true){
          Parent = Current
          if (Current != null){
             if (data < Current.data){
                Current = Current.left
                if (Current == null){
                   Parent.left = n
                   break
                }
             }
             else {
                Current = Current.right
                if (Current == null){
                   Parent.right = n
                   break
                }
             }
          }
       }
    }
 }
 function find(data){
    var Current = this.root
    if (data != Current.data){
       while(Current.data != data){
          if (data < Current.data){
             Current = Current.left
          }
          if (data > Current.data){
             Current = Current.right
          }
          if (Current == null){
             return null
          }
       }
       
    }
    return Current.data
 }
 function InOrder(Node){
    if (Node != null){
       InOrder(Node.left)
       console.log(Node.show() +' ')
       InOrder(Node.right)
    }
 }
 function PreOrder(Node){
    if (Node != null){
       console.log(Node.show()+ ' ')
       PreOrder(Node.left)
       PreOrder(Node.right)
    }
 }
 function PostOrder(Node){
    if (Node != null){
       PostOrder(Node.left)
       PostOrder(Node.right)
       console.log(Node.show()+ ' ')
 
    }
 }
 function GetMin(){
    var Current = this.root
    while(Current.left != null){
       Current = Current.left
    }
    return Current.data
 }
 function GetMax(){
    var Current = this.root 
    while(Current.right != null){
       Current = Current.right
    }
    return Current.data
 }
 var Nums = new BST()
 var HowMany = parseInt(prompt("How Many Numbers"))
 for (let i = 0 ; i < HowMany;i++){
    var Input = parseInt(prompt('Enter the Number '))
    Nums.insert(Input)
 }
 console.log('InOrder Traversal')
 InOrder(Nums.root)
 console.log('\n')
 console.log('PreOrder Traversal')
 PreOrder(Nums.root)
 console.log('\n')
 console.log('PostOrder Traversal')
 PostOrder(Nums.root)
 console.log('\n')
 console.log(`The Minimum Value = ${Nums.GetMin()}`)
 console.log('\n')
 console.log(`The Maximum Value = ${Nums.GetMax()}`)
 console.log('\n')
 var Find = parseInt(prompt("Enter The Value"))
 console.log(`The Value is found ${Nums.find(Find)}`)