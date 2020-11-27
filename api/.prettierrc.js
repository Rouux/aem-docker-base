// http://json.schemastore.org/prettierrc

module.exports = {
	tabWidth: 2, // Largeur des tabs, j'te jure
	useTabs: true, // Utiliser des tabs plutot que des espaces pour l'indentation
	semi: true, // Forcer le ';' à la fin des instructions
	singleQuote: true, // Forcer l'utilisattion des singlequote '' par rapport aux quote "" (hors template litteral (``))
	trailingComma: 'none', // Mettre une virgule ou non après le dernier item d'un tableau/objet
	bracketSpacing: true, // false : {test}, true : { test }
	arrowParens: 'avoid', // Supprimer les parenthèses dans les fonctions fléchées à 1 argument
	endOfLine: 'lf', // Forcer le type de retour à la ligne Linux plutot que windows
	printWidth: 80, // Limite la taille maximum de la ligne
	proseWrap: 'never' // Eviter les retours à la ligne dans les string trop longues
};
