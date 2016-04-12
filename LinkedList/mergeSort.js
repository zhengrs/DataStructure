(function(){

	var LinkedList = function(){
		this.head = null;
	}, LinkedNode = function(data){
		this.data = data;
		this.next = null;
	};

	LinkedList.prototype.append = function(data){
		var newNode = new LinkedNode(data), node;
		if(!this.head){
			this.head = newNode;
			return;
		}

		node = this.head;
		while(node.next){
			node = node.next;
		}
		node.next = newNode;
	};

	var print = function(head){
		while(head){
			console.log(head.data);
			head = head.next;
		}
	};

	var mergeSortedLinkedList = function(head1, head2){

		if( !head1 ) return head2; 
		if( !head2 ) return head1;

		var node1 = head1, 
				node2 = head2,
				head, node;  // node always points to the last node of head list

		if( node1.data < node2.data ){
			head = node1;
			node = head; 
			node1 = node1.next;
		}
		else{
			head = node2;
			node = head;
			node2 = node2.next;
		}

		while( node1 && node2 ){
			if( node1.data < node2.data ){
				node.next = node1;
				node = node.next;
				node1 = node1.next;
			}
			else{
				node.next = node2;
				node = node.next;
				node2 = node2.next;
			}
		}

		while( node1 ){
			node.next = node1;
			node = node.next;
			node1 = node1.next;
		}

		while( node2 ){
			node.next = node2;
			node = node.next;
			node2 = node2.next;
		}

		node.next = null;

		return head;
	};

	var getLength = function(head){
		var n = 0;
		while(head){
			n++;
			head = head.next;
		}
		return n;
	};

	var getNthNode = function(head, n){
		if( !head ) return null;

		var m = 0;
		while( head && m<n ){
			head = head.next;
			m++;
		}

		if( head && m==n ){
			return head;
		}
		return null;
	};

	var mergeSort = function(head){
		if( !head || !head.next ) return head;

		var n = getLength(head),
				m = Math.floor((n+1)/2)-1,
				node = getNthNode(head, m),
				head1, head2;

		if( !node )	return head;

		head1 = head;
		head2 = node.next;
		node.next = null; // disconnected two lists

		head1 = mergeSort(head1);
		head2 = mergeSort(head2);
		return mergeSortedLinkedList(head1, head2);
	};

	(function(){
		var l = new LinkedList();
		l.append(1);
		l.append(5);
		l.append(3);
		l.append(99);
		l.append(63);
		l.append(78);
		l.append(24);
		l.append(-99);
		l.append(0);

		
		var h = mergeSort(l.head);
		print(h);

	})();



})();
