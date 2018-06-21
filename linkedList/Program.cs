using System;

namespace linkedList
{
    public class Node
    {
        public object data;
        public Node next;
        public Node(object a)
        {
            data = a;
            next = null;
        }
    };

    public class LinkedList
    {
        Node head;
        Node current;
        int count;

        public LinkedList()
        {
            head = new Node(null);
            current = head;
            count = 0;
        }
        public void insert(object n)
        {
            Node newNode = new Node(n);
            //newNode.data = n;
            current.next = newNode;
            current = newNode;
            count++;

        }

		public void AddAtStart(object data)
		{
			Node newNode = new Node(data);
			newNode.next = head.next;//new node will have reference of head's next reference
			head.next = newNode;//and now head will refer to new node
			count++;
		}
        public void PrintAllNodes()
        {
            //Traverse from head
            Console.Write("Head ->");
            Node curr = head;
            while (curr.next != null)
            {
                curr = curr.next;
                Console.Write(curr.data);
                Console.Write("->");
            }
            Console.Write("NULL");
        }

    };

class Program
{
	static void Main(string[] args)
	{
		LinkedList lnklist = new LinkedList();
		lnklist.PrintAllNodes();
		Console.WriteLine();
		lnklist.insert(12);
		lnklist.insert("John");
		lnklist.insert("Peter");
		lnklist.insert(34);
            lnklist.AddAtStart("divya");

		lnklist.PrintAllNodes();
		Console.WriteLine();
		Console.ReadKey();
	}
}
}
