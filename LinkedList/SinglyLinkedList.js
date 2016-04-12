// create a independent context for not polluting the global context
(function(){
	
	var LinkedList = function(){  // list constructor
		this.head = null;
	}, LinkedNode = function(data){		// node constructor
		this.data = data;
		this.next = null;
	};

	var linkedListPrototype = { 

		//---------------- basic operations ----------------
		isEmpty : function(){
			return this.head ? false : true;
		},

		traverse : function(operator){ 
			var node = this.head, 
					cur_pos = 0;

			while(node){
				operator(node, cur_pos);
				node = node.next;
				cur_pos++;
			}
		}, 

		prepend : function(data){
			var new_node = new LinkedNode(data);
			new_node.next = this.head;
			this.head = new_node;
		}, 

		append : function(data){
			var new_node = new LinkedNode(data),
					node = this.head;

			if(!this.head){
				this.head = new_node;
			}
			else{
				while( node.next ){
					node = node.next;
				}
				// at this point, variable node points to the last node of list
				node.next = new_node; 
			}
		}, 

		insert : function(data, pos){	// pos is from 0 - length of list
			var newNode = new LinkedNode(val),
				node, // node points pos-1 position, pos>0
				i;

			if( pos === 0 ){
				// equals to this.prepend(val)
				newNode.next = this.head;
				this.head = newNode;
			}
			else{
				node = this.head;
				i = 0;
				while( node && i<pos-1 ){
					node = node.next;
					i++;
				}
				if( node ){
					newNode.next = node.next;
					node.next = newNode;
				}
			}
		},

		remove : function(pos){	// pos is from 0 - length-1 of list
			var removedNode, preNode, curPos;

			if( pos === 0 ){
				if( !this.head ){
					return null;
				}
				removedNode = this.head;
				this.head = this.head.next;
				return removedNode;
			}
			else{
				preNode = this.head;
				curPos = 1;
				while( preNode.next && curPos<pos ){
					preNode = preNode.next;
					curPos++;
				}
				if( preNode.next && curPos === pos ){
					removedNode = preNode.next;
					preNode.next = preNode.next.next;
					return removedNode;
				}
				return null;
			}
		},

		//---------------extra operations ----------------
		print : function(){
			this.traverse(function(node){
				console.log(node.data);
			});
		},

		update : function(data, pos){
			this.traverse(function(n,i){
				if( i===pos ){
					n.data = data;
				}
			});
		},

		reverse : function(){
			var pre_node,
					node,
					next_node;

			if( !this.isEmpty() && this.head.next){
				pre_node = null;
				node = this.head; // garentee not null at this point
				//next_node = node.next;

				while( node ){
					next_node = node.next;  // store the link

					node.next = pre_node;

					pre_node = node;
					node = next_node;
				}
				this.head = pre_node;
			}
		}, 

		sort : function(){
			
		}

	};

	LinkedList.prototype = linkedListPrototype;


	// main function
	(function(){

		var l = new LinkedList();
		l.append(1);
		l.append(2);
		l.append(3);
		l.append(4);
		l.append(5);

		l.print();

		console.log("--------------------------");

		l.reverse();

		l.print();

	})();



})();
