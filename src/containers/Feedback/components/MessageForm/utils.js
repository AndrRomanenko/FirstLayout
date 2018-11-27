/* eslint-disable no-useless-escape */
const namePattern = /^[a-zA-Z]+(?:(?:|['_\. ])([a-zA-Z]*(\.\s)?[a-zA-Z])+)*$/;
const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const checkName = name => (!!name.match(namePattern));

export const checkEmail = email => (!!email.match(emailPattern));

export const checkMessage = message => (!!(message.length <= 200 && message.length !== 0));