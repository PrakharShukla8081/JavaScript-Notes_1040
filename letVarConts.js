// 👉
// “var is function-scoped and hoisted with undefined, while let and const are block-scoped and exist in the temporal dead zone. const cannot be reassigned, while let can.”



// | Feature       | var             | let       | const     |
// | ------------- | --------------- | --------- | --------- |
// | Scope         | Function        | Block     | Block     |
// | Hoisting      | Yes (undefined) | Yes (TDZ) | Yes (TDZ) |
// | Re-declare    | ✅ Yes           | ❌ No      | ❌ No      |
// | Re-assign     | ✅ Yes           | ✅ Yes     | ❌ No      |
// | Global object | ✅ Yes           | ❌ No      | ❌ No      |
