export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('render:html', (html, { event }) => {
        html.head.unshift(`<!--

   .----------------.            ,,..    ,,
  | .--------------. |         ,MF'\`\`A.  db
  | |        __    | |         6M   .M'
  | |       / /    | | ,pP"Ybd MM mmb. \`7MM  \`7MMpMMMb.
  | |      / /     | | 8I   \`" MM    Yb  MM    MM    MM
  | |     / /      | | \`YMMMa. MM    b8  MM    MM    MM
  | |    / /       | | L.   I8 MM.   p9  MM    MM    MM
  | |   /_/        | | M9mmmP' MM\`bmd9'.JMML..JMML  JMML.
  | |              | |         MM
  | '--------------' |         MM
  '----------------'

  /sBin.dev/#!cyberRoze.md
  Mohammad Shokri Khanghah's personal website

  cat /dev/infinity/mysteries | /sBin/cyberRoze.md -0 > /dev/null 2>&1

-->`);

        html.bodyAppend.push(`<!--

00101110 00111010 00111010 01111011 00100000 01110100 01101000 01100001 01110100 01010111 01101000 01101001 01100011 01101000 01000110 01100101 01100101 01100100 01110011 01001101 01100101 01000100 01100101 01110011 01110100 01110010 01101111 01111001 01110011 01001101 01100101 00100000 01111101 00111010 00111010 00101110

-->`);
    });
});
