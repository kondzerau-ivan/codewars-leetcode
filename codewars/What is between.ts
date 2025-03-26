export function between(a: number, b: number): number[] {
    let arr: number[] = [];
    for (let i = a; i <= b; i++) {
        arr = [...arr, i];
    }
    return arr;
}
