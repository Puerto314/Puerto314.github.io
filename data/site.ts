/**
 * ============================================
 * PAGE CONTENT DATA
 * ============================================
 * All structured content for pages lives here.
 * Edit these arrays/objects to customize the template content.
 *
 * Replace placeholder images in src/assets/ with your own.
 */

export const site = {
  url: 'https://example.com',
  meta: {
    title: 'Esteban Puerto Rojas | Estudiante de Ingeniería de Sistemas',
    description:
      'Portafolio de Esteban Puerto Rojas, estudiante de Ingeniería de Sistemas en la Universidad El Bosque, interesado en programación y ciberseguridad.',
  },
  hero: {
    name: 'Esteban Puerto Rojas',
    role: 'Estudiante de Ingeniería de Sistemas',
    tagline:
      'Aprendiendo a construir software con buenas bases, con especial interés en ciberseguridad.',
    contact: 'Abierto a proyectos, prácticas y colaboraciones.',
    avatarSrc: '/Avatar.png',
    avatarAlt: 'Esteban Puerto Rojas',
  },
  about: {
    paragraphs: [
      'Tengo 18 años, nací en Duitama y actualmente vivo en Bogotá, donde curso cuarto semestre de Ingeniería de Sistemas en la Universidad El Bosque.',
      'Me apasiona la programación y la ciberseguridad, y estoy en un momento de mi carrera enfocado en aprender, experimentar y construir proyectos que me ayuden a crecer como desarrollador.',
      {
        heading: 'Intereses',
        bullets: [
          'Programación y desarrollo de software',
          'Ciberseguridad',
          'Videojuegos',
          'Fútbol',
          'Música',
        ],
      },
    ],
  },
  evidences: {
    modelado: {
      title: 'Modelado',
      paragraphs: [
        'En esta sección, se encuentran las evidencias de los talleres sobre MER, MER extendido, y Modelo Relacional',
      ],
      linkText: 'Ver diagrama MER',
      linkUrl:
        'https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=ENVIARDB.drawio&dark=auto#R%3Cmxfile%3E%3Cdiagram%20name%3D%22P%C3%A1gina-1%22%20id%3D%22irm5W2qF8rG0nmMjXhZo%22%3E7V1bd5vIsv41Weuch3jRzf1RcTyzvVcmznGSOZknLSKwzd6S8NYlcebX70ZcJFUj0UBVgyzNw0QgQLjuXf1V1Rvzevby%2ByJ4fvojCaPpG26EL2%2FM9284Nx3PF%2F%2BkZ35lZ7jB8zOPizjMzrHtic%2Fx31F%2B0sjPruMwWu5duEqS6Sp%2B3j85SebzaLLaOxcsFsnP%2Fcsekun%2Brz4Hj5F04vMkmMpn%2Fz8OV0%2FZWY%2B72%2FP%2FiOLHp%2BKXmZP%2FfbOguDj%2FS5ZPQZj83Dll3rwxrxdJsso%2BzV6uo2lKvYIu2X2%2FHfi2fLFFNF%2Bp3PDt99l8%2Bld0bf7z35H79f%2FWH36OXt5WPCU%2FtVz9Kmjw8yleRZ%2Bfg0l6%2FFMw%2Bo357mk1m4ojJj4G0%2FhxLj5PxCOihTiRPeBHMF3nD7i%2Buf9y%2B9vt9ej9Xf5dtFhFLzu%2Fl7%2Fy71Eyi1aLX%2BKSpx2qWjkJf245wIz8XP4Ux7Wz41zQmO%2FkFwS5BDyWz94SSXzI6dSAZlwLze6%2FfhlREcstZLIglmNTEctUIZZQjef04%2BIpmX1fi1d49xwtYvECKWmKs5%2B2p951pu5tKL6KH%2BJJsGhFZKeCyHyfyD4DEulYVES2hknkO%2FEDKX2dqXipd8vnYL73Rs5%2F1qntezdJpom4X0i7sXj8HvyPoJIggwH%2B%2Bd%2FNLwgDPl%2B9fQhm8fRXdsssmSfL7CXL75cbN5J%2Bazy%2FZOcFc1dv81cebV4jWKyyrzZ%2F59v8Gel38yT%2Fa7fvKD49Zv%2Fa0NvZglHp2Y0lL48Kxtkb1okz79PPqYjYKZlswe%2B6a1l5bcHZVo%2Fhhx%2Bz8wsZW8pvMmFJDwtxEZ93BGbnm0%2B7J3eFJr1mQ8j0%2FEZw0jNsc5hxIj3OxSc9uX2bTIjKt9nT1vKaTGPlP6Ykx1Z37VJ7y8udLQ1zLd4%2BaYe%2Bxs4vvLV2v%2Fi1c4Oxcz5Ybr943HkDyK7NYcmz3ZP7kpRfJ4lcplXCXmSKVcgnjTFj3AAuwzOorJk9TGv2j%2BB7PI1XhA7DNEEIQ%2BaVHRUSi%2BeIKDtqQbvUCH%2FOH2RV0XKShPFjMl6sVwFVjGNb0P1yKmq6tNSUqRevwyAcJ4v4MZpro59LRj8ve24USksxmaDJejGJ6nmxS%2Fh5OEoXguJonsyjfWIvkvU8jNKXM8RR9BKvvuXfpJ%2F%2FSs9f2fnR%2B5edy97%2FKg7mggTfdg927koPt7dtjor7svcU5uQxWtUvNna4X8%2Fdwmwsommwin%2FsE3WH5cfMS%2F4Ln5I4DRjKVRaHQgFXWRmD8tt2V6PwSXC95jLwpIw00pM2Elb%2B4e2FzkcUOsYvUkcodZ4JZcVsKXW%2BAZ7kwScRS10h5DhiV%2BFlLmKHJnauZOxgyKsqdq4PxQ4%2BiVrslPJ8%2BCFKGC1X8TzRFqM4LlWMUph4bRQM14tgEifzcUrCWRDiBcpg2WFD62rTEVEpG4hIxIdo8hSMo5fnKIxTYlIJoqUv%2B8yUkn3oNPwRzSfxLBZX4Wkzg0TcTzFwg2zFwZRyDIQL4Pl6Fi2S8UQQcZPXCrVRlflkiRuWpxVwghtb5sdJBzdMEoJ6%2FtIFN7YJxaJtTG1LAgb3OaiDGxdT7MyL2FEmEPw6G68cU5vwSbqXcphpK%2BeVSd3AV3LSfnfrlZwLn0Qtdah5KwypM9pIHaOxddawxE4yUa0TCFJorDlbWljpHGYVfC8ExjgsfVupehSS81zJmsYRL3flkJd7cLOSwZCEDgxUoX5HKYiJERr9eXv3sRUZj61p8WnEFWzWcaLVWTJeEbaJXyvWYMli9ZQ8JvNgerM9C%2BzZ9poPSfKc8%2BBf0Wr1K0clBmux9t3jkGwtxZnf4pQ6pdmS%2BVBpaNStCgNWRXPYwytyOKoCT7igngWrRTxZT9HSZD6wKR5w%2FGTKYtErS8XS%2BkyUxdOsLBV5JnplkZUjhQ2RZeGZt09jOl%2Brkl%2FqqBoV%2BIEzUQ2m25FUwGZ60I1JIG6OwyDUpR6MznWoZCQ66od%2Fvvrha9YPfxD6EczjZPwQfBfRVUC5hSapCdkuZMFXlBRK1baRDoUosnfb1Mlfu98dyKOoKJJCnsXqqHDd2KeEZUjx%2Fvs0q9KE5WqR%2FDu6zgoQCpI8CHqAU5KapPIvFGI6yr%2BYxWFYwVpJmz6%2BMUdFRr6ZCpmyCjlAg0yY9vCKTTR8Jqgs6VV1CGXLZUBpSC6xvZ69hOg5uD9nt81C%2BhBuY2leThUAeRSpQ9lfHpDUDWujz4eoIikFqyp1nrUvv%2FKWIbXUKSFuBupwxIuM2qWI6x2OZA8csqWNqQTYGTAPqJy%2B78CiITLQlIkJ76mKm0%2Fa%2FNqDMr%2BMSYhEqJuq9pcZcGXmw6UZtQHOM0W9bz5aTNZHywRRuAM9n%2BWQReGeTICjFMTcfPw0%2Bjz65809WUeHMnmOTzbVzEoF2Qi3sMJksp5hAmzhFhZd%2FwGVjIoyhV9pPpGDaAmunVTtMQfrOc1rMItdeF3vfpF4zVi%2FvFbJ8hzndV0caJ0PcKMM3XtipipwA9XrSV5unsy%2BL6J2yyGFqMEEuzZkm9FWa5yGum6cD06DwzWG5hoCSxWooUM5Wi5OmisHI8sVWK2hGuracT7hhKQdmreiLVWoBq12BM%2Fpw8JEm%2FOg24O2WkM11PXj1UI1xA8Ev3YueE7lfqmuPkVa9eAKy6sM1Lb8zl7gULrseOhPraq95DYOqqo2VybBoPHakXVPbtRuRfYEIjmuqsQJ8yx5qdsWCPW8MsCWCWycW38Lb2QRwCJewo4TmwS7S4IGu4%2FAPEBvIwCBZDZE6pNZBvr0iPlqnXit49S8y293SI8UzSiz7eeZeNE41QVTHITJOtuuOrQb3ayR9t3HL6PrL3h7Lva%2B7pR%2FXMEDn2oPxqZPn9jnkz4BVcmmC9hGrTvDyJ6s4udknHVWoXIuUEFMm0xB6DModk8ZlF6xy53Dzm5c7ZBJ0d%2FyuJUWVXQ6BhvRZcVCiRsji9Do0yy9K5G1vzqrVyNxtCMlSrpV4q1KjFWpsQfxVor6mMVdveljh3TJQNGGBiHiE0CbOBmyqfjdV8QXShQo6G9DBvRxVMAfqhBQr%2BfSqX276daltVRtZJMuTLpilgMrbhsOdbDgeu8AUAVr4eCoZFCUe2idD5SEmb4UQulNlzi6W7k%2BL6JJTJc0tODWnw03bvCMqErqQ1nozyfJIQu9rbn5mqNUhYLZnGAaiAfpk3myTTQHs3bE6XvJ1UfewjvAdOLtMqFzV4YDfI1tF%2BcO7plV3WczeF%2FdzpllQQmFRQHUGq97tk%2B2S7aIltHiB9lsJFnzHTrNr6hRuVTubZgCC4XoBkQ6FWmOk2ECZULDc6AikPHArUhpnAwPSBWhrG%2FcwhvJmHDKzUMoFUFmgjRkCY8J%2FISZQKkJnqttAqSrtH4%2FQx4ww9bHhDwAUFoVncEC35WGzHr%2B%2FkOUC%2Bdg723tI7dcpRmrA1YwMk8DZ0BQxlyYo0Fc74w0UVIfzSUnrtKyEacan1fqQBy%2BpcUSbXP29L1bXKUFIGYlm2bSeY5PRLpiH2BAbW%2BabzH205amebYR5vv8ZrU38H4Z%2FK0cQMiP0rzZ4CnFghhtXMZ%2Ffr1B01QwXZKZMMNiQXAqnqYqrStPBEZn1wdSNsTRWWT1il6%2BJuq9BZNZ0YJJnv8CR2TA4AWPLhW9AY8SEFN1v4zefbj5QuZjAQ3JSKgKHq8gIWLAks1IGG9Ee0VmDYExJAO%2BehWrT1Wi6jeQ7xPhS1vRvAJszKBVJANyeCqry%2BNUr4sX%2FW69kVtWcLZpr5i9Z%2F029rBGtDHHv%2FLL%2F7w9wWk7mVIa0AS1nDpwbA16VxZLrwJ1dBFLRLGsa9TSVhald6GWRZ9eFi0UWQSoHkNVFvErIgrfPRBZhOu3tqLo9CuJxRKgTUR0jll6GEWRVQL7jS3CSTAGfX%2BSvJ2BX5E%2BuTDiICOkzj54jFBtRYC6Iq7tT7wUS75g2oqaCs2JyVJXPibc3j9nuL1r6AXf%2BsRw%2BwF05JZwuB6Zm8VE4Pvn03uxotRKd%2BRKjEFX2Qof%2F1gjTpCF%2BXrLBJArlwwRUuR4%2Bt%2FI8GW6lOUORbk1HOgmzWjFo4tqIbwvo2C670He3%2F15c%2FP%2B7h5LwOqGS5LhLMofbkNHQk82j%2FH2NIBQkqEjmaG6MkSlpUS7RfB3Mh8vkwli9AsFlMrrM4MruP3jRK0LBko%2B6QO1HCriR2pNWRjDgWTgLAh2gmsl1RQcbJqqeY4TM1TmN3YVRuMijFqFET6irTBqjqqZoQrdoIh4bj9%2B%2FvoH2egsBpYsUsdZRP%2Biit7QG%2B9MkjB%2BTMbxfLme4aFQGQjPazQBkcqtmwGqG0722gxnqeEDsZwwkcAhEFLVclqgVI9rzssxozXwpYEfr%2Bh8fBFHTHGEMBWYelR25ECuTTh1nlwcWwNeGogjDspgOIiX0nMPRBy5VNHRNq6EZtbSLY4dUmmIaYswWk4W8fMkTuZoARAcwgE7tpMFQEVw0jNN1%2FM4DMLxLArFv7qoShdWsg4JthMpo6gACMOepsDwmGQ5dsb4hd4cFgTRgeAZ05BvKnjaUzOypgGFaqNn%2FIAjy2N13Z9tWlIolfHl0cHB6AFcbxlADI%2FVH8KbJVNC3E6VsdZTNRoIfM9te3G775FG2FYfEs%2BhEDpNRJh7xpVhu8zi3ub%2FBXpq%2B7ArI%2F9q839Xs4B3SDcOGKNI1q8d%2BlrC2EZlEa6KL2KsIvuj1chw19%2F3rIKW6qYm7du6jCd71qb8ATh8QdWcHFqfY5kTfGVVajrRvQz2%2FvbT1w%2Bjj1%2FwitjhfkqZgM%2F1yDtG5m56VEBTcPSoiOKHEZ026bF%2FSIVUtYX1Em4y7gJJyacvHizQqrlh312jqWbxh6vA4I7LKZCsD8H3aFqjwYc9ZbSM%2F87fJRWHnNri4fa7N%2Fb7KuVfrsUy%2BEe8DEL1bb5KEchvEeGNvz%2Fiy60REXkY237EtH978vCwjGhio0LXh9b%2B4nPBokUr%2B3ysxLsEkNpAiRidfSYefFC7tR2H49Uifl5PA3EHlscDwHS%2FGPSiwd9hlmcwfkb1GYYHhF5zi7aS2PqaignjtCCbh%2BBDI0JWksQ4ZjEG4z3PQwALpa45yDfDjvCg2vmWUYwHPzxBHKqqCe%2BhivN0zy%2FI%2Bv6Np7G4ZBKT7ZFBB0XXOZFx1MQGP6MhVZLUW%2BAZ5A5KpfuEMuuKYWXdEElNGka0bU6hakHtojZ6GBAQEQuCiTFSjbVy3xMGnDkzYOqTWvhM1ESOXWG1T1v4iglyQxE%2BWWJgPK0ufA6cfATrGcmFT6l56BnuiDAG4B4%2BWW9IZiolZM6RCRaIDFyPLL9gnvKgiyK7mbRLnSlwwgQ7G25RbkTAiYqCG9K1yCqOZs%2FJeCKY8kKIgnRdMMdLapGFSEOllMtApZnUpBg%2B4ILkvhG5cMqzPUafb3%2F%2FOLq%2BvWvHClbRgJkVjYhK%2Bw4DILqR5MzEnPHBzL6BB826ECKl0pyuqbSOLERNsZwpC7vOiO%2FIQj1Yj0%2B3H%2B6%2B0NXNcq8ua4BHMQs1P2BVRFKvX%2BitrgjLjixUWmV3FvrR12%2B3H25H92RiL7lrSrHnDcT%2BrITZRNnPqmhgZsINK7VCT7RklKVShnGWLLeaIJQasBziYfSzXPdaf5Kuhh7Eeiird3Sm6dIrjH%2BIj4%2Fpx%2FGP%2BDHaAGayr8SftfMtlmV1gWG1Ob%2BCyQG6Iknrkhw4mPQF%2BkDIhFPODRBnaECFN6PL0FioSQGrp8mfpXNyUWueVL1TTwCbsr3ZFmCzKxD1N3iODgi1pTSh9ETKdhWmzXGQ5iaE3FhKyYTXQ1oLuic60tq4WYe%2BU22euxe2X%2FkKJSYVJVgnbjEtuMJjdRbTN4%2FdQGQxbT3pkj%2B%2F3oy%2F3N%2B2UtY2xWDMoNvcsJtkS2rV1eU9qyunqd3Gn8GUo5N0a7IHp%2B7Ybp0mm%2BzKMI3yP370%2Fprib8eGP9967hiz%2BJW3naznA5UxLf%2FKs7avrRkYajfJSNWpVbcRjZ0a1TXrhdBM9k9maDizQYrFaST0zJCkvm1%2FZflVTN1dbW3McqqKnndnsOzFMf0VwgGGEPQgHDZmNOH0VMpQXXaE1vkolzrUiY4oaf7mteiwpWIBpz9cjA7vsHJUlaIp5TB%2BkURcfXAp1BYLTiAk1xalTO7ryUJw6ActugJIGzU%2Fa%2Fecn8W1RKp%2Byu5qVTqyUCn%2FiTmHJZmOg%2FH3ZNGg1UOz%2FTrfhSt7usb5NmptWlW%2FpCGXBw216KfYOsAoONNd81PYc20K%2BZQsguV4mVYoTGKq4XCyTtL1Cy2YjxQfV3fI6ckrNem9dMpuqajSPZeorewlAXZLKUirVEpVkDZDOMyEvMQpZUxxECbrrLnTIcBD0zz%2FBzoosJTlJyxhcHSjpVLLPV6K6%2FC6mEPokwmh1ITjcRzcvIaDEku1Seg27OasapIHV2oNtwOM1hlXAz6KwfCAPOxSShMgKm%2B0XDXpdlejt3JBKERpEeotahbAqUhXX%2FQWU29NDn1ia73l8FGmdr3Vnb9Yxc%2F4jZEktwvpSog3dpRgWugLTtRR5JB%2BUgsaQvq5Sgv217tUoSyUd9VKTBALEIL5Kh0ORCSYPujqLxSdbGZ0ARPSgNO6%2Ffh5%2FOmebBXnAmQwswi1ue%2FGsFpmnvrSDp9nklGUeFlcS9F5vNJGR8s80mi6Ix2J%2B7Tu0pFX5vjjENdrwxwxGJnGLLrKkiIdTYfIPO0pp4XjHciaxZM8QNuWgpIHtnTDd1zU5XJH0Wu7%2Bd1CZJVFb1jLZSF6sPjTUhwIJguf07vwofZoeYV2b1jTnX0JydU2VeNLFlT3xraLCpV4haI3rEnOHkTu2RBFoyx6EiINOm9q0St%2B70xSNL5hAtbBxhF4gXTR8hMJAPX6tJpXcr0vrXZNqNVtHYrrQyGDSRlyreaoolexltZWAJQO6NytkbgyjPo5hav2Qwj7lcrG9XQynr1JaZALl3x2Wzi7Bw2rfk92yn2QSfuScAYaG9ABfTyljOZZMgG0oPOhfiAy4dIm6VAfCoglpNst8S5tkg4xATZzoKvC8ZSmQ50jE%2BRCODrUuacERDlLLkAMKSUXlMAs58gFOKyDkgvFvt2FC5ALNph4R8oFYvDMMGbcuoCgjK7Yz%2Bf6CNrPDjys0pJg2IjExGzegjVYrU32hgg1XGjvQBKHjMEsiqRo6kWWEjgdBsfUaRQfdVz1KxS%2BXvODFRLDoMRAw6ReagI3QjmEr5ILn0YgV6VfngXCLU%2BEWybyydu95ZLGdNUnPiqSy6%2BYPH%2Faqjy06hMLYmB4a1Xmvbdi8okHc6uihRfrFdmQbkFVWC9EGGKj4pOqelud9nZyIXBD0Wap25BUX62uzcXMyoNlaeTaTFwJVavND9HkCbuiW1Zn06yhM5o6l%2FlXJOeM0x7n4pwPqrNdTHctPWrr0lCpAll3aSg3BpD%2F6jj6VyH%2F5exrs1ukcAiUmSMqc8kd3X111PpHYvh8jmUlcPrRV3Vd2FdRF9bbqGd0uH38SeS6PqymNrfvb%2B%2F%2BGJG5cAcsfDzukyk9ZqaMG92W1y07Zlc3xjOOKrWibpaCNxQPDsHWXmud9iBUVKrzJldqpUTZq4FtMxeGTAZZdTg3MNNmWHrdMMpuE9Gr%2BtxiKOxQ9Foa6lCWaDZWbOlRUi9GcsW%2BIJYOmAAHZs7p%2BmRy44JYOmSIJS6QQSi5obv9ThzGyYysc5Htw1mpHhkGuMxDIzmxbtnitkOI6ZxYKVtDcWKesZ9ekkCx6j4MTpfUnCvmbADJJXJwFbMBIMj1yBaaRenfoHS5bUBKsNBkAwtI3WKoXZl4bKvLcNnjaZ4jxhkmFM3D6Tvbpoc%2Fa%2BJ3FOWuBDedRqngdv%2BxDN325w7X1AoyDnOibXt9MO7yK9PeDsfbd32uw6481yon6%2BmdisOZUglb51jz%2Bu7jzbfbu3aBukpnODiMnK69d1lfqC1Q3yB9iXeDXTAOmhkuWcqJ6W6xnBFwOo0eA50UhBYDkYK4nZZR0DED2k4vrdpQYiQDwlalh6jDVuGjLAjCIncZmNCs0hj00m4hnQ%2B0J4CG0Wrg%2BInKpe%2FvxyJyklG5tY8kldrX4Urps1ezR%2BTD%2BjFukvnrYrvvkh%2BuZQIZIPaokT1rJjjQ9EhTzhGZwC9MqGSC1JfVbmGOxOEiSVa7jkGQ6umPJIzSK%2F4L%3C%2Fdiagram%3E%3C%2Fmxfile%3E',
    },
    normalizacion: {
      title: 'Normalización',
      paragraphs: [
        'En esta sección, se encuentran las evidencias de los talleres sobre modelización',
      ],
    },
    sql: {
      title: 'SQL',
      paragraphs: [
        'En esta sección, se encuentran las evidencias de los trabajos y talleres sobre SQL',
      ],
    },
    proyecto: {
      title: 'Proyecto',
      paragraphs: [
        'En esta sección, se encuentran las evidencias de los entregables del proyecto final',
      ],
    },
  },
  experiences: [],
  featuredProjects: [],
  projectArchivePage: {
    title: 'Proyectos',
    description: 'Archivo de proyectos: aún en construcción.',
    intro: 'Aquí iré agregando los proyectos que desarrolle a lo largo de mi carrera.',
  },
  projectArchive: [],
  contact: {
    email: 'epuertor@unbosque.edu.co',
    github: 'https://github.com/Puerto314',
    instagram: 'https://instagram.com/puerto314',
  },
} as const;

export type ProjectArchiveRow = (typeof site.projectArchive)[number];
export type FeaturedProject = (typeof site.featuredProjects)[number];