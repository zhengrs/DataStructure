(function(){

	var LinkedNode = function(val){
		this.data = val;
		this.next = null;
	};


	var rotateRight = function( head, k ){
		if( !head || !head.next || k<0 ) return head;
	
		var n,
				node,
				i,
				m;
	
		node = head;
		n = 1;
		while( node.next ){
			node = node.next;
			n++;
		}
	
		node.next = head;
	
		m = n - k%n; // m's range : [ 1, n ]
	
		node = head;
		i = 0;
		while( i<m-1 ){
			node = node.next;
			i++;
		}
	
		head = node.next;
		node.next = null;
	
		return head;
	};
	
})();
