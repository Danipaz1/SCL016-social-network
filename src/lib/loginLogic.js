export const loginUser = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
}

export const singUpUser = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
}