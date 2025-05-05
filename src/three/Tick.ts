export const oType = Symbol('observed object')
export class Tick {
  private [oType]: {[key: string]: CB[]}  = {
    __default__: []
  };

  add(fn: CB): void;
  add(type: string, fn: CB): void;
  add(a: string | CB, fn?: CB) {
    if (typeof a === 'function') {
      this[oType].__default__.push(a);
    }
    if (typeof a === 'string' && typeof fn === 'function') {
      this[oType][a] = this[oType][a] || [];
      this[oType][a].push(fn);
    }
  }

  /**
   * 移除 指定的 fn
   * @param fn 
   */
  remove(fn: CB): void;
  /**
   * 移除该 type 下所有的 callback
   * @param type 
   */
  remove(type: string): void;
  remove(type: string, fn: CB): void;
  remove(a: string | CB, fn?: CB) {
    if (typeof a === 'function') {
      this[oType].__default__ = this[oType].__default__.filter(item => item !== a);
    }

    if (typeof a === 'string' && !fn) {
      this[oType][a] = [];
    }

    if (typeof a === 'string' && typeof fn === 'function') {
      this[oType][a] = this[oType][a] || [];
      this[oType][a] = this[oType][a].filter(item => item !== fn);
    }
  }
}


interface CB {
  (deltaTime: number): void
}

