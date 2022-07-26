const hello = {
  entryPoint: __snapshots => () => {
    let message = "hello, world!";

    __snapshots.push({
      message: message,
      line: 2
    });
  },
  params: "[]",
  code: "() => {\n  let message = \"hello, world!\";\n  debugger;\n}"
};
export const Hello = () => <div>
    <pre>{JSON.stringify(hello, null, 2)}</pre>
  </div>;