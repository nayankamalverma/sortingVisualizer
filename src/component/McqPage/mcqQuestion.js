let QuizData ={
    'Bubble Sort' : {
                questions : [
            {
            text: "What are the correct intermediate steps of the following data set when it is being sorted with the bubble sort? 15,20,10,18",
            options: [
                { id: 0, text: "15,10,20,18 -- 15,10,18,20 -- 10,15,18,20", isCorrect: true },
                { id: 1, text: "10, 20,15,18 -- 10,15,20,18 -- 10,15,18,20", isCorrect: false },
                { id: 2, text: "15,20,10,18 -- 15,10,20,18 -- 10,15,20,18 -- 10,15,18,20", isCorrect: false },
                { id: 3, text: "15,18,10,20 -- 10,18,15,20 -- 10,15,18,20 -- 10,15,18,20", isCorrect: false },
            ],
            },
            {
            text: "In a bubble sort structure, there is/are?",
            options: [
                { id: 0, text: "A single for loop", isCorrect: false },
                { id: 1, text: "Three for loops, all separate", isCorrect: false },
                { id: 2, text: "A while loop", isCorrect: false },
                { id: 3, text: "Two for loops, one nested in the other", isCorrect: true },
            ],
            },
            {
            text: "What are the worst case and best case time complexity of bubble sort consequently?",
            options: [
                { id: 0, text: "O(n), O(n2)", isCorrect: true },
                { id: 1, text: "O(n2), O(n3)", isCorrect: false },
                { id: 2, text: "O(n), O(n3)", isCorrect: false },
                { id: 3, text: "None of the above", isCorrect: false },
            ],
            },
            {
            text: "Which one of the following is the first step in a selection sort algorithm?",
            options: [
                { id: 0, text: "The minimum value in the list is found", isCorrect: false },
                { id: 1, text: "The maximum value in the list is found.", isCorrect: false },
                { id: 2, text: "Adjacent elements are swapped.", isCorrect: true },
                { id: 3, text: "none", isCorrect: false },
            ],
            },
            {
            text: "When using Bubble sort, what number of swappings are required to sort the numbers 8,22,7,931,5,13 in ascending order?",
            options: [
                { id: 0, text: "5", isCorrect: false },
                { id: 1, text: "10", isCorrect: true },
                { id: 2, text: "20", isCorrect: false },
                { id: 3, text: "14", isCorrect: false },
            ],
            },
        ]
    },
    'Insertion Sort' : {
        questions : [
            {
            text: "Consider the following array and what is the status of the array after the fourth pass when we use the insertion sort?",
            options: [
                { id: 0, text: "16, 20, 12, 8, 4, 1", isCorrect: false },
                { id: 1, text: "12, 16, 20, 8, 4, 1", isCorrect: false },
                { id: 2, text: "8, 12, 16, 20, 4, 1", isCorrect: false },
                { id: 3, text: "4, 8, 12, 16, 20, 1", isCorrect: true },
            ],
            },
            {
            text: "Which sorting is using the given example?    A player is playing a card game and sorting the cards. The Player first picks one card then picks the next card and put it after the first card if it is bigger or before the first card if it is smaller; then he picks another card and inserts it into its proper position.",
            options: [
                { id: 0, text: "Bubble Sort", isCorrect: false },
                { id: 1, text: "Selection Sort", isCorrect: false },
                { id: 2, text: "Insertion Sort", isCorrect: true },
                { id: 3, text: "Nope of the above", isCorrect: false },
            ],
            },
            {
            text: "As part of the maintenance work, you are entrusted with the work of rearranging the library books in a shelf in proper order, at the end of each day. The ideal choice will be",
            options: [
                { id: 0, text: "Bubble Sort", isCorrect: false},
                { id: 1, text: "Selection Sort", isCorrect: false },
                { id: 2, text: "Heap Sort", isCorrect: false },
                { id: 3, text: "Insertion Sort", isCorrect: true  },
            ],
            },
            {
            text: "Which of the following is TRUE of the time complexity of the insertion sort algorithm to sort a list of ‘n’ integers?",
            options: [
                { id: 0, text: "Ω (n2)", isCorrect: false },
                { id: 1, text: "Ω (n)", isCorrect: true },
                { id: 2, text: "O(n)", isCorrect: false },
                { id: 3, text: "O(n log (n))", isCorrect: false },
            ],
            },
            {
            text: "Average number of comparison required for a successful search for sequential search on ‘n’ items is",
            options: [
                { id: 0, text: "n/2", isCorrect: false },
                { id: 1, text: "(n−1)/2", isCorrect: false },
                { id: 2, text: "(n+1)/2", isCorrect: true },
                { id: 3, text: "Nope of the above.", isCorrect: false },
            ],
            },
        ]
    },
    'Merge Sort' : {
        questions : [
            {
            text: "Which Sorting algorithm is based on divide and conquer method:",
            options: [
                { id: 0, text: "Merge Sort", isCorrect: false },
                { id: 1, text: "Quick Sort", isCorrect: false },
                { id: 2, text: "Insertion Sort", isCorrect: false },
                { id: 3, text: "Both A & B", isCorrect: true },
            ],
            },
            {
            text: "Which of the following sort algorithms has execution time that is least dependent on initial ordering of the input?",
            options: [
                { id: 0, text: "Insertion Sort", isCorrect: false },
                { id: 1, text: "Quick Sort", isCorrect: false },
                { id: 2, text: "Merge Sort", isCorrect: true },
                { id: 3, text: "Selection Sort", isCorrect: false },
            ],
            },
            {
            text: "____ sorting algorithms has the lowest worst-case complexity.",
            options: [
                { id: 0, text: "Selection Sort", isCorrect: false},
                { id: 1, text: "Bubble Sort", isCorrect: false },
                { id: 2, text: "Quick Sort", isCorrect: false },
                { id: 3, text: "Merge Sort", isCorrect: true  },
            ],
            },
            {
            text: "Which of the following is the worst-case time complexity of the merge-sort algorithm?",
            options: [
                { id: 0, text: "Θ(n lg n)", isCorrect: true },
                { id: 1, text: "Θ(n1.5 lg n)", isCorrect: false },
                { id: 2, text: "Θ(n2)", isCorrect: false },
                { id: 3, text: "Θ(n)", isCorrect: false },
            ],
            },
            {
            text: "Two-way merge sort algorithm is used to sort the following elements in ascending order.   200, 470, 150, 80, 90, 40, 400, 300, 120, 70.   What is the order of these elements after second pass of the merge sort algorithm?",
            options: [
                { id: 0, text: "40, 80, 90, 150, 200, 300, 400, 470, 70, 120", isCorrect: false },
                { id: 1, text: "80, 150, 200, 470, 40, 90, 300, 400, 70, 120", isCorrect: true },
                { id: 2, text: "40, 70, 80, 90, 120, 150, 200, 300, 400, 470", isCorrect: false },
                { id: 3, text: "200, 470, 80, 150, 40, 90, 300, 400, 70, 120", isCorrect: false },
            ],
            },
        ]
    },
    'Quick Sort' : {
        questions : [
            {
            text: "Which of the following algorithm design approach is used in Quick sort algorithm?",
            options: [
                { id: 0, text: "Dynamic programming", isCorrect:false },
                { id: 1, text: "Back Tracking", isCorrect:  true },
                { id: 2, text: "Divide and conquer", isCorrect: false },
                { id: 3, text: "Greedy approach", isCorrect: false },
            ],
            },
            {
            text: "Which of the following algorithm design technique is used in designing quick sort algorithm",
            options: [
                { id: 0, text: "Dynamic programming method", isCorrect: false },
                { id: 1, text: "Back tracking strategy", isCorrect: false },
                { id: 2, text: "Divide and conquer strategy", isCorrect: true },
                { id: 3, text: "Greedy strategy", isCorrect:  false},
            ],
            },
            {
            text: "What is the worst case running time of quick sort algorithm?",
            options: [
                { id: 0, text: "Ɵ(x log2x2)", isCorrect: false },
                { id: 1, text: "Ɵ(x)", isCorrect: false },
                { id: 2, text: "Ɵ(x log2x)", isCorrect: false },
                { id: 3, text: "Ɵ(x2)", isCorrect: true },
            ],
            },
            {
            text: "What is the best case complexity of QuickSort?",
            options: [
                { id: 0, text: "O(nlogn)", isCorrect: false },
                { id: 1, text: "O(logn)", isCorrect: false },
                { id: 2, text: "O(n)", isCorrect: true },
                { id: 3, text: "O(n2)", isCorrect: false },
            ],
            },
            {
            text: "Assume that the algorithms considered here sort the input sequences in ascending order. If the input is already in ascending order, which of the following are TRUE?    I. Quicksort runs in Θ (n2) time   II. Bubblesort runs in Θ (n2) time   III. Mergesort runs in Θ (n) time  IV. Insertion sort runs in Θ (n) time",
            options: [
                { id: 0, text: "I and II only", isCorrect: false },
                { id: 1, text: "I and III only", isCorrect:  false},
                { id: 2, text: "II and IV only", isCorrect: false },
                { id: 3, text: "I and IV only", isCorrect: true  },
            ],
            },
        ]
    },
    'Selection Sort' : {
        questions : [
            {
            text: "Which one of the following is the first step in a selection sort algorithm?",
            options: [
                { id: 0, text: "The minimum value in the list is found.", isCorrect: true },
                { id: 1, text: "The maximum value in the list is found. ", isCorrect: false },
                { id: 2, text: "Adjacent elements are swapped.", isCorrect: false },
                { id: 3, text: "none", isCorrect: false },
            ],
            },
            {
            text: "Which of the following statement is correct with respect to selection sort?",
            options: [
                { id: 0, text: "The list is considered to be divided into two lists, where the left list contains the unsorted elements, and the right list contains the sorted elements.", isCorrect: false },
                { id: 1, text: "The list is considered to be divided into three lists, where the left list contains the unsorted elements, the right list contains the sorted elements and the mid portion contains the key value which needs to be compared.", isCorrect: false },
                { id: 2, text: "The list is not divided, but an extra array is required to store elements.", isCorrect: false },
                { id: 3, text: "The list is considered to be divided into two lists, where the left list contains the sorted elements, and the right list contains the unsorted elements.", isCorrect: true },
            ],
            },
            {
            text: "How many swaps are required for the given array1 and array 2 using selection sort respectively? Note: The sorted array should be in increasing order.       Array 1:  7 6 8 5 9 4 10 3          Array 2: 10 9 8 7 6 5 4 3",
            options: [
                { id: 0, text: "7 , 4", isCorrect: true },
                { id: 1, text: "7 , 7", isCorrect: false },
                { id: 2, text: "7 , 8", isCorrect: false },
                { id: 3, text: "7 , 0", isCorrect: false },
            ],
            },
            {
            text: "The best case and worst case swaps in the slection sort respectively for n elements ?",
            options: [
                { id: 0, text: "zero, n-1", isCorrect: true },
                { id: 1, text: "n-1 , n", isCorrect: false },
                { id: 2, text: "n , zero", isCorrect: false },
                { id: 3, text: "n , n²", isCorrect: false },
            ],
            },
            {
            text: "Which of the following sorting methods will be the best, if the number of swappings done, is the only measure of efficiency?",
            options: [
                { id: 0, text: "Bubble sort", isCorrect: false },
                { id: 1, text: "Quick Sort", isCorrect: false },
                { id: 2, text: "Insertion Sort", isCorrect: false },
                { id: 3, text: "Selection Sort", isCorrect: true },
            ],
            },
        ]
    },
    'Binary Search' : {
        questions : [
            {
            text: "",
            options: [
                { id: 0, text: "", isCorrect: true },
                { id: 1, text: "", isCorrect: false },
                { id: 2, text: "", isCorrect: false },
                { id: 3, text: "", isCorrect: false },
            ],
            },
            {
            text: "",
            options: [
                { id: 0, text: "", isCorrect: false },
                { id: 1, text: "", isCorrect: false },
                { id: 2, text: "", isCorrect: false },
                { id: 3, text: "", isCorrect: true },
            ],
            },
            {
            text: "",
            options: [
                { id: 0, text: "", isCorrect: true },
                { id: 1, text: "", isCorrect: false },
                { id: 2, text: "", isCorrect: false },
                { id: 3, text: "", isCorrect: false },
            ],
            },
            {
            text: "",
            options: [
                { id: 0, text: "", isCorrect: false },
                { id: 1, text: "", isCorrect: false },
                { id: 2, text: "", isCorrect: true },
                { id: 3, text: "", isCorrect: false },
            ],
            },
            {
            text: "",
            options: [
                { id: 0, text: "", isCorrect: false },
                { id: 1, text: "", isCorrect: true },
                { id: 2, text: "", isCorrect: false },
                { id: 3, text: "", isCorrect: false },
            ],
            },
        ]
    }
}

export default QuizData;