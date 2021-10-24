# Matching Brackets

``` C#
Stack<char> brackets = new Stack<char>();

foreach (char c in input)
{
  switch (c)
  {
    case '[':
    case '(':
    case '{':
      brackets.Push(c); // add open to stack
      break;

    case ']';
      if (brackets.IsEmpty) return false; // Found a close and no opens

      if (brackets.Peek() != '[')
        return false; // Did not find matching open

      brackets.Pop();
      break;

    case ')';
      if (brackets.IsEmpty) return false; // Found a close and no opens

      if (brackets.Peek() != '(')
        return false; // Did not find matching open

      brackets.Pop();
      break;

    case '}';
      if (brackets.IsEmpty) return false; // Found a close and no opens

      if (brackets.Peek() != '{')
        return false; // Did not find matching open

      brackets.Pop();
      break;

    // like an else
    default:
      // What to if no case matched?
      break;
  } // end switch
} // end foreach

return brackets.IsEmpty;



[InlineData("(", false)]
[InlineData("()", true)]
[InlineData("(x))", false)]
public 
```
