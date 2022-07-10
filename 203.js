const head = { "val": 1, "next": { "val": 2, "next": { "val": 6, "next": { "val": 3, "next": { "val": 4, "next": { "val": 5, "next": { "val": 6, "next": null } } } } } } };
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let dummy = new ListNode(-1, head),
        prev = dummy,
        cur = head;
    for (let i = 0; i < 1; i++) {
        (cur.val === val)
            ? prev.next = cur.next
            : prev = cur;
        cur = cur.next;
    }
    return dummy.next;
};
removeElements(head, 6);