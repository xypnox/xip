---
---


What we want to achieve is a system where we can toggle a few key variables and the theme is generated accordingly. We want to define both the base variables and how those are converted to the final theme tokens.

This level of freedom in defining the theme allows us to either reuse a large theme across multiple projects or make several small themes specific to the complexity of the interfaces.

The palette is divided into:

- **Base Palette**  
  This includes the variables that don't change with the change in mode. i.e. Typography, spacing, etc.

- **Vars Palette (Modes)**  
  These are the variables that change with the mode. i.e. Colors, shadows, etc.

Themescura provides a few core functions: 

- **`generateTheme()`**  
  when given a palette will generate the json theme object.

- **`cssConverter()`**   
  converts a theme object to css string with dark, light classes and user-preference media queries.

