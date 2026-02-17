# Exercice : Création d'un Quiz React

## Objectif
Créer une application de quiz interactive en utilisant le **prop drilling** et le **lifting up state**.

## Consignes

Vous devez créer un quiz composé de :
- **Plusieurs questions** avec des choix multiples
- **Une navigation** entre les questions (suivant/précédent)
- **Un système de score**
- **Un écran de résultats** à la fin

## Contraintes techniques
- **Pas de Context API** - utilisez uniquement le prop drilling
- **State dans le composant parent** - principe du "lifting state up"
- **Composants réutilisables**

## 🏗️ Structure des données

Utilisez ce tableau de questions :
```javascript
const quizData = [
  {
    id: 1,
    question: "Quelle est la capitale de la France ?",
    options: ["Paris", "Lyon", "Marseille", "Toulouse"],
    correctAnswer: 0
  },
  {
    id: 2,
    question: "Combien font 5 + 7 ?",
    options: ["10", "11", "12", "13"],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "Quel est le langage de programmation créé par Facebook ?",
    options: ["Vue", "Angular", "React", "Svelte"],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "En quelle année a été créé JavaScript ?",
    options: ["1995", "2000", "2005", "2010"],
    correctAnswer: 0
  }
];
```

## Composants à créer

### 1. `Quiz.jsx` (Composant racine)
- Gère l'état principal :
    - Question courante
    - Réponses de l'utilisateur
    - Score
    - État "terminé"
- Passe les props aux composants enfants

### 2. `Question.jsx`
- Affiche la question courante
- Affiche les options de réponse
- Reçoit les props du parent
- Remonte la réponse sélectionnée (lifting state up)

### 3. `Navigation.jsx`
- Boutons Précédent / Suivant / Valider
- Logique de navigation

### 4. `Results.jsx`
- Affiche le score final
- Affiche le détail des réponses
- Bouton pour recommencer

## ✨ Fonctionnalités attendues

1. Navigation entre les questions
2. Sélection d'une réponse par question
3. Désactivation du bouton "Suivant" si aucune réponse n'est sélectionnée
4. Calcul automatique du score
5. Affichage des résultats avec le détail des réponses correctes/incorrectes
6. Possibilité de recommencer le quiz

## Indices

- Utilisez `useState` pour gérer l'état dans `App.jsx`
- Passez des **callbacks** aux composants enfants pour modifier l'état parent
- Stockez les réponses dans un objet : `{ questionId: selectedOption }`
- Le score se calcule en comparant les réponses aux bonnes réponses

