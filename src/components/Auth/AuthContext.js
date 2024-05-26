/* 
import React, { createContext, useReducer, useContext } from 'react';

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('token', action.payload.token);
      return { ...state, isAuthenticated: true };
    case 'LOGOUT':
      localStorage.removeItem('token');
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  // 초기 상태 설정: localStorage에 토큰이 있는 경우에만 인증됨
  const initialState = {
    isAuthenticated: !!localStorage.getItem('token'),
  };

  // 상태와 리듀서를 useReducer 훅을 사용하여 관리
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
 */

import React, { createContext, useReducer, useContext } from 'react';

const AuthContext = createContext();

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isLoggedIn: true,
                token: action.payload.token,
            };
        case 'LOGOUT':
            return {
                ...state,
                isLoggedIn: false,
                token: null,
            };
        default:
            return state;
    }
};

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, { isLoggedIn: false, token: null });

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
