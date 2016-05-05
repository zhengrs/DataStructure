var oddEvenList = function(head) {
    
			if( !head ){
				return head;
			}

			var LinkedList = function(){
				this.head = null;
				this.lastNode = null;
			};
			LinkedList.prototype.append = function(node){
				if( node ){
					node.next = null;

					if( !this.head ){
						this.head = node;
						this.lastNode = this.head;
					}
					else{
						this.lastNode.next = node;
						this.lastNode = node; 
					}
				}
			};

			var oddList = new LinkedList(),
				evenList = new LinkedList(),
				node = head,
				counter = 1,
				nextNode;

			while( node ){
				nextNode = node.next;
				if( counter%2==0 ){
					evenList.append(node);
				}
				else{
					oddList.append(node);
				}
				node = nextNode;
				counter++;
			}

			if( oddList.lastNode ){
				oddList.lastNode.next = evenList.head;
			}  

			return oddList.head;
			
	};
