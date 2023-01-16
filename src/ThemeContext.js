import React, { useState } from 'react';

const [재고] = useState([1, 2, 3]);

const ThemeContext = React.createContext(재고);

export default ThemeContext;
