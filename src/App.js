import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    data: {},
    forTest: "APPLE",
    forTestPeach: "PEACH",
    Step1: true,
    Step2: false,
    step3: false
  };
  asyncFetch = async () => {
    try {
      const response = await fetch("http://localhost:3000/posts");
      const data = await response.json();
      this.setState({
        data
      });
      console.log(data);
    } catch (err) {
      console.log("fetch failed", err);
    }
  };
  try = (a, b = 3) => {
    return a + b;
  };
  setFunc = () => {
    const set = new Set();
    const data = [2, 3, 5, 4, 5, 2, 2];
    data.forEach(x => set.add(x));
    set
      .add(1)
      .add(2)
      .add(6);
    set.delete(2); //刪除2
    set.has(2); // false  (沒有數值2)
    console.log(set);
  };
  mapFunc = () => {
    let map = new Map();
    // 可以使用 set() 方法設置資料內容
    map.set("first", 1);
    map.set(10, "ten");
    map.set({ sayHi: "Hi" }, "obj");
    console.log("map:", map);
    var kvArray = [["key1", "value1"], ["key2", "value2"]];
    var myMap = new Map(kvArray);
    console.log("myMap:", myMap);
    // 顯示 Map {"key1" => "value1", "key2" => "value2"}
  };
  foo = function* gen() {
    console.log("start");
    var got = yield "called";
    console.log(got);
  };

  forOfLoop = () => {
    const data = this.state.data;
    console.log(data);
    for (let chr of "😺😲") {
      console.log(chr);
    }
    for (let chr of "あいうえおかきくけこ") {
      console.log(chr);
    }

    for (let che of data) {
      console.log(che); // ANS:{...}※沒有Array.from 不能for...of
    }

    function* foo() {
      yield 1;
      yield 2;
      yield 3;
      yield 4;
      yield 5;
      return 6;
    }
    for (let v of foo()) {
      console.log(v); //ANS:1,2,3,4,5
    }
  };

  SpreadAndRest = (a, b, c, ...d) => {
    console.log("a", a);
    console.log("b", b);
    console.log("c", c);
    console.log("d", d);
  };
  include = (...b) => {
    console.log(b.includes("pink")); //true
    let include = b.includes("black");
    var g = this.foo();
    var a = g.next();
    console.log(a);
    console.log(g.next("hello generator"));
    if (include) {
      console.log("trueee");
    } else {
      console.log("falseeee");
    }
  };
  symbol = () => {
    let info1 = {
      name: "婷婷",
      age: 24,
      job: "公司前台",
      [Symbol("description")]: "平时喜欢做做瑜伽，人家有男朋友，你别指望了"
    };
    let info2 = {
      [Symbol("description")]: "这小姑娘挺好的，挺热情的"
    };
    let target = {};
    console.log(Object.assign(target, info1, info2));
    // let s1 = Symbol("foo");
    // let s2 = Symbol("bar");
    // let s3 = Symbol();
    // let s3Symbol = {
    //   [s3]: "hellooooooooo"
    // };
    // console.log("s3Symbol", s3Symbol);
    // console.log("s1toString:", s1.toString());
    // console.log("s2notoString:", s2);
  };
  promiseTest = () => {
    var NanShen = {
      身高: 180,
      體重: 80,
      年薪: "200K",
      request: function(obj) {
        //攻略長輩成功與否隨機決定
        // 成功概率為80%
        if (Math.random() > 0.2) {
          obj.success();
        } else {
          obj.error();
        }
      }
    };

    var Request = function(names, success) {
      var index = 0,
        first = 0;
      var request = function() {
        if (names[index]) {
          NanShen.request({
            name: names[index],
            success: function() {
              first = 0;
              console.log("成功拿下" + names[index]);
              index++;
              request();
            },
            error: function() {
              if (first === 1) {
                console.log("依舊沒能拿下" + names[index] + "，求婚失敗");
                return;
              } else {
                console.log("沒能拿下" + names[index] + "，再試一次");
              }
              first = 1;
              request();
            }
          });
        } else {
          success();
        }
      };

      request();
    };

    Request(["岳父", "大伯", "大姑"], function() {
      NanShen.request({
        name: "女神",
        success: function() {
          console.log("女神同意，求婚成功！");
        },
        error: function() {
          console.log("女神不同意，求婚失敗！");
        }
      });
    });
  };
  iterableTest = () => {
    // let arr = ["Alice", "Bob", "Carol"];
    // let mapping = {
    //   foo: "bar"
    // };
    // console.log(new Set(Object.keys(mapping))); //----{"foo"}
    // let iterator = arr[Symbol.iterator]();
    // console.log(iterator.next()); //{value: "Alice", done: false}
    // console.log(iterator.next()); //{value: "Bob", done: false}
    // console.log(iterator.next()); //{value: "Carol", done: false}
    // console.log(iterator.next()); //{value: "undefined", done: true}

    const pureAssoc = (key, value, object) => ({
      ...object,
      [key]: value
    });
    const person = {
      name: "Bobo"
    };
    const result = pureAssoc("shoeSize", 400, person);
    console.log({
      person, //{name: "Bobo"}
      result //{name: "Bobo", shoeSize: 400}
    });
  };
  getAirSpeed = () => {
    console.log("getAirSpeed func state forTest is APPLE");
  };
  getWaterSpeed = () => {
    console.log("getWaterSpeed func state forTest is BANANA");
  };
  hashMap = state => {
    // switch (state) {
    //   case "APPLE":
    //     return this.getAirSpeed();
    //   case "BANANA":
    //     return this.getWaterSpeed();
    //   default:
    //     return;
    // }

    // ----------- 相等於SWITCH CASE

    var data = {
      APPLE: this.getAirSpeed, // key:value
      BANANA: this.getWaterSpeed
    };
    return data[state]();
  };
  twoSum = () => {
    //num[0],num[1] === target
    //回傳 [0,1]
    const num = [2, 7, 11, 15];
    const target = 9;
    for (let i = 0; i < num.length; i++) {
      for (let j = i + 1; j < num.length; j++) {
        if (num[i] + num[j] === target) {
          console.log([i, j]);
        }
      }
    }
  };
  becomesBanana = () => {
    this.setState({
      forTest: "BANANA"
    });
  };
  becomesApple = () => {
    this.setState({
      forTest: "APPLE"
    });
  };
  Step1 = () => {
    this.setState({
      Step1: true,
      Step2: false,
      step3: false
    });
  };
  Step2 = () => {
    this.setState({
      Step1: false,
      Step2: true,
      Step3: false
    });
  };
  Step3 = () => {
    this.setState({
      Step1: false,
      Step2: false,
      Step3: true
    });
  };
  render() {
    const array = ["pinkkkk", "whiteeee", "yellowwww"];
    // const arr = [1, 2, 3, 4, 5];
    // console.log(...array);
    // console.dir(arr);
    // const abbc = {
    //   he: "he",
    //   do: () => {
    //     console.log("dothis", this); //window
    //     return "aaaaahrelo";
    //   },
    //   happy() {
    //     console.log("happythis", this); //abba
    //     return "aaaaaaaahappy";
    //   }
    // };
    let style = state => ({
      background: state ? "darkseagreen" : "burlywood",
      margin: "10px",
      display: "inline-block",
      padding: "20px"
    });
    // console.log(abbc.do());
    // console.log(abbc.happy());

    return (
      <div className="App">
        <div className="divv">
          <p onClick={this.asyncFetch}>Hello fetch func</p>
          <p>
            b預設值=3
            <br />
            傳入a=1,b=5 ANS:{this.try(1, 5)}
            <br />
            只傳入a=1 ANS:{this.try(1)}
          </p>
          <p onClick={this.setFunc}>SetFunc</p>
          <p onClick={this.mapFunc}>MapFunc</p>
          <p onClick={this.forOfLoop}>forOfLoopFunc</p>
          <p
            onClick={() =>
              this.SpreadAndRest(...array, ["あか", "ブルー", "みどり"])
            }
          >
            Spread/Rest Operator
          </p>
          <p
            onClick={() => this.include(...array, ["あか", "ブルー", "みどり"])}
          >
            include
          </p>
          <p onClick={this.symbol}>symbol</p>
          <p onClick={this.promiseTest}>promise</p>
          <p onClick={this.iterableTest}>iterable</p>
          <p onClick={this.becomesBanana}>becomesBanana</p>
          <p onClick={this.becomesApple}>becomesApple</p>
          <p onClick={() => this.hashMap(this.state.forTest)}>hashMap</p>
          <p onClick={this.twoSum}>twoSum</p>
          <p onClick={this.Step1}>OPENSTEP1</p>
          <p onClick={this.Step2}>OPENSTEP2</p>
          <p onClick={this.Step3}>OPENSTEP3</p>
          <div>
            <div style={style(this.state.Step1)}>STEP1</div>
            <div style={style(this.state.Step2)}>STEP2</div>
            <div style={style(this.state.Step3)}>STEP3</div>
          </div>
          <p>STEP4</p>
        </div>
      </div>
    );
  }
}

export default App;
