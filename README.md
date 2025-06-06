
## Introduction
*Ce projet s'agit d'une application en `React` qui affiche les données météo de plusieurs villes.  
L'utilisateur peut choisir une ville, voir ses informations météo et définir une ville favorite, Les données méteorologiques sont affichées en format tableau et en format graphique.*

## ✅ Fonctionnalités de l’application

- Choisir une ville pour afficher ses données météo dans un tableau.
- Affichage d’un graphique météo de la ville selectionnée.
- Définir une ville comme favorite.
- Sauvegarde de la ville favorite localement (dans le navigateur).
- Comparaison entre la ville favorite et la ville sélectionnée :
  - Affichée dans un tableau
  - Affichée dans le graphique
- 
## Technologies utilisée
- React  
- Webpack  
- Node.js / NPM  
- HTML / CSS / JavaScript 

## Démarrage du projet

### 1. Cloner le dépôt
```bash
git clone <url>

```
### 2. Aller dans le dossier du projet
```bash
cd wheather-app
```

### 3. Installer les dépendances
```bash
npm install
```

### 4. Lancer le projet (mode développement recommandé)
Ce mode permet de voir les changements automatiquement après chaque modification :
```bash
npm run dev-server
```
Ouvrir ensuite ce fichier dans un navigateur :

```
dist/index.html
```

### 5. Générer la version production (bundle)

Pour créer le bundle final du projet :
```bash
npm run build
```

Puis ouvrir :
```
./dist/index.html
```

## Aperçu

Voici quelques captures d'écran de l'application en fonctionnement :

### Données météorologiques pour une ville sélectionnée
![Données pour une ville](src/assets/images/donnee-pour-une-ville.png)

### Comparaison avec la ville favorite
![Comparaison avec la ville favorite](src/assets/images/comparaison-avec-ville-favorite.png)

### Graphique de comparaison
![Graphique de comparaison](src/assets/images/graph-comparaison.png)
