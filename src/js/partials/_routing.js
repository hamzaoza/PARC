import Navigo from "navigo/lib/navigo.es";

const root = null;
const useHash = true; // Defaults to: false
const hash = '#!'; // Defaults to: '#'

export const router = new Navigo(root, useHash, hash);