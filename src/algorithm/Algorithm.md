---
icon: fab fa-markdown
date: 2023-11-22
category:
  - DataStructures
tag:
  - java
star: true
sticky: true
---

# algorithm

[[toc]]
---

## 算法复杂性分析

![algorithm](../../.vuepress/public/assets/images/algorithm.png)


### 常数阶(1)
```java
public void sum(int n) {
    int sum = 0; // 执行一次
    sum = n*2; // 执行一次
    System.out.println(sum); // 执行一次
}
```

### 对数阶(logN)
多少个2相乘后其结果值会大于n，即2^x=n。由2^x=n可以得到x=logn，所以这段代码时间复杂度是O(logn)
```java
public void logarithm(int n) {
    int count = 1; // 执行一次
    while (count <= n) { // 执行logn次
        count = count*2; // 执行logn次
    }
}
```

### 线性阶(n)
```java
public void circle(int n) {
    for(int i = 0; i < n; i++) { // 执行n次
        System.out.println(i); // 执行n次
    }
}
```

### 对数阶(n*logN)
```java
public void logarithm(int n) {
    int count = 1;
    for(int i = 0; i < n; i++) { // 执行n次
        while (count <= n) { // 执行logn次
            count = count*2; // 执行nlogn次
        }
    }
}
```

### 平方阶(n2)
```java
public void square(int n) {
    for(int i = 0; i < n; i++){ // 执行n次
        for(int j = 0; j <n; j++) { // 执行n次
            System.out.println(i+j); // 执行n方次
        }
    }
}
```

## 常见算法

### 冒泡排序算法
```java
public static void bubbleSort(int[] input) {
    for (int i = 0; i < input.length - 1; i++) {
        for (int j = 0; j < input.length - i - 1; j++) {
            if (input[j] > input[j+1]) {
                int tmp = input[j];
                input[j] = input[j+1];
                input[j+1] = tmp;
            }
        }
    }
}
```

### 快速排序算法
```java
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        // Create an integer array
        int[] nums = new int[]{5, 7, 89, 6, 4};
        System.out.println("Unsorted array: " + Arrays.toString(nums));
        quicksort(nums, 0, nums.length - 1);
        System.out.println("\n\nSorted array: " + Arrays.toString(nums));
    }

    public static void quicksort(int[] arr, int low, int high) {
        if (arr == null || arr.length <= 0) return;

        if (high - low < 1) {
            // Base case where we have only one element left
            return;
        } else {
            int partitionIndex = partition(arr, low, high);

            // Recursive call to sort first half
            if (partitionIndex > low && partitionIndex < high) {
                quicksort(arr, low, partitionIndex - 1);
            }

            // Recursive call to sort last half
            if (partitionIndex + 1 < high) {
                quicksort(arr, partitionIndex + 1, high);
            }
        }
    }

    private static int partition(int[] arr, int low, int high) {
        int pivot = arr[(high + low) / 2];
        int start = low;
        int end = high;

        while (start <= end) {
            while (end > start && arr[end].compareTo(pivot) >= 0) {
                end--;
            }
            if (arr[start].compareTo(pivot) < 0) {
                swap(&arr[start], &arr[end]);
                start++;
            } else {
                end--;
            }
        }
        swap(&arr[start], &arr[high]);
        return start;
    }

    private static void swap(Object x, Object y) {
        if (x instanceof Integer) {
            Integer temp = (Integer) x;
            (y).intValue();
            x.intValue(temp.intValue());
            (y).intValue(temp.intValue() ^ 1);
        } else if (x instanceof Integer[]) {
                ((int[]) x)[0])];
            }
    }
}
```

### 二分查找算法
```java
public static int binarySearch(int[] arr, int key) {
    int low = 0;
    int high = arr.length - 1;
  
    while (low <= high) {
        int mid = (arr.length - 1) / 2;
  
        if (key < arr[mid]) {
            high = mid - 1;
        } else if (key > arr[mid]) {
            low = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
}
```

### 反转链表
```java
import java.lang.*;
class ListNode{
    public int val;
    public ListNode next;
    public ListNode prev;
}

    public ListNode reverseList(ListNode head){
        if(head == null || head.next == null){
            return head;
        }
        ListNode first = head;
        ListNode second = head.next;

        while(second != null){
            ListNode tempNext = second.next;
            // Swap next
            second.next = first;
            // Swap tail
            last = second;
            last.prev = first;

            // Move second node one position forward 
            first = second;
            // Move first node to previous node
            second = tempNext;
        }
        return head;
    }
```

### 动态规划
#### 斐波那契数列
题目: https://link.juejin.cn/?target=https%3A%2F%2Fleetcode-cn.com%2Fproblems%2Ffei-bo-na-qi-shu-lie-lcof
```java
class Solution {
    public int fib(int n) {
        // f(0)和f(1)
        if (n <= 1) {
            return n;
        }
        // 递归
        return (fib(n - 1) + fib(n - 2)) % 1000000007;
    }
}
```
```mermaid
graph LR;
F(4)-->F(2)
F(4)-->F(3)

F(2)-->F(0)=0
F(2)-->F(1)=1

F(3)-->F(2)
F(3)-->F(1)=1

F(2)-->F(0)=0
F(2)-->F(1)=1
```
- 计算F(4)，因为4 > 1，代入公式F(N) = F(N - 1) + F(N - 2)得到：F(4) = F(3) + F(2)，所以想要计算F(4)的值，需要先计算F(2)和F(3)的值
- 计算F(2)，同理得到F(2) = F(1) + F(0) = 1 + 0 = 1
- 计算F(3)，同理得到F(3) = F(1) + F(2)，这里的F(2)也需要再计算一次，F(2) = F(1) + F(0) = 1 + 0 = 1，最终计算出F(3) = F(1) + F(2) = 1 + 1 = 2
- 最终计算出F(4) = F(3) + F(2) = 2 + 1 = 3
  
可以看到，在计算F(4)的值时，对于F(2)的计算其实是执行了两次，随着N不断增大，出现重复计算的地方也会越多！
我们的优化思路就是减少这部分重复计算，当N确定时，F(N)计算一次过后的结果其实是不变的，我们把它保存下来即可。又因为N > 1时，F(N) = F(N - 1) + F(N - 2)，所以F(N)的计算，其实只依赖于前两项，只需要保存前两项结果即可
  
优化后的代码：
```java
class Solution {
    public int fib(int n) {
        // 定义f(0)和f(1)
        int a = 0;
        int b = 1;
        // 定义返回的结果，注意这里result = n
        int result = n;
        // 迭代处理
        while (n > 1) {
            // 按题目要求取模
            result = (a + b) % 1000000007;
            // 后移
            a = b;
            b = result;
            n--;
        }
        return result;
    }
}
```

#### 爬楼梯
题目：https://leetcode.cn/problems/climbing-stairs/

```java
class Solution {
    public int climbStairs(int n) {
        int a = 1, b = 1, sum;
        for(int i = 0; i < n - 1; i++){
            sum = a + b;
            a = b;
            b = sum;
        }
        return b;
    }
}
```


#### 打家劫舍
题目：https://leetcode.cn/problems/house-robber/

```java
class Solution {
    public int rob(int[] nums) {
        // 特殊判断
        if (nums == null || nums.length == 0) {
            return -1;
        }

        int a = 0;
        int b = 0;
        int result = 0;
        // 迭代处理
        for (int i = 0; i < nums.length; i++) {
            // 获取偷窃最高金额：偷窃当前房屋时金额和不偷窃当前房屋时金额中最高金额
            int c = Math.max(nums[i] + a, b);
            a = b;
            b = c;
            result = Math.max(result, c);
        }
        return result;
    }
}
```

