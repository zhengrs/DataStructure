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
			if(pos<0) return false;

			var new_node = new LinkedNode(data),
					cur_pos,
					node,
					pre_node;


			if( this.isEmpty() || pos === 0 ){
				this.prepend(data);
			}
			else{
				pre_node = this.head;  // not null
				node = pre_node.next;
				cur_pos = 1; // node is reference to second node in the list 

				while( cur_pos < pos && node ){
					pre_node = node;
					node = node.next;
					cur_pos++;
				}

				if( cur_pos === pos ){
					new_node.next = node;
					pre_node.next = new_node;

				}
				else{
					return false;
				}
			}	
			return true;
		},

		remove : function(pos){	// pos is from 0 - length-1 of list
			if(pos<0) return null;

			var pre_node,
					node,
					cur_pos,
					remove_node;

			if( this.isEmpty() ){
				return null;
			}
			else if( pos === 0 ){
				remove_node = this.head;
				this.head = this.head.next;
				return remove_node;
			}
			else{
				pre_node = this.head;
				node = this.head.next;
				cur_pos = 1;

				while( node && cur_pos < pos ){
					pre_node = node;
					node = node.next;
					cur_pos ++;
				}

				if( node ){
					remove_node = node;
					pre_node.next = node.next;
					return remove_node;
				}
				else{
					return null;
				}
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
