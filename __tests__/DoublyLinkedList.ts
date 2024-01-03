import DoublyLinkedList from "../DoublyLinkedList.ts";
import LikedList from "../DoublyLinkedList.ts";

type List<T> = {
  get length(): number;
  removeAt(index: number): T | undefined;
  remove(item: T): T | undefined;
  get(index: number): T | undefined;
  prepend(item: T): void;
  append(item: T): void;
  insertAt(item: T, idx: number): void;
};

export function test_list(list: List<number>): void {
  list.append(5);
  list.append(7);
  list.append(9);

  expect(list.get(2)).toEqual(9);
  expect(list.removeAt(1)).toEqual(7);
  expect(list.length).toEqual(2);

  list.append(11);
  expect(list.removeAt(1)).toEqual(9);
  expect(list.remove(9)).toEqual(undefined);
  expect(list.removeAt(0)).toEqual(5);
  expect(list.removeAt(0)).toEqual(11);
  expect(list.length).toEqual(0);

  list.prepend(5);
  list.prepend(7);
  list.prepend(9);

  expect(list.get(2)).toEqual(5);
  expect(list.get(0)).toEqual(9);
  expect(list.remove(9)).toEqual(9);
  expect(list.length).toEqual(2);
  expect(list.get(0)).toEqual(7);
}

test("DoublyLinkedList", function () {
  const list = new DoublyLinkedList<number>();
  test_list(list);
});
