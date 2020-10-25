class Newsletter {
    constructor(estabelishment_category, message, title, name) {
        this.estabelishment_category = estabelishment_category
        this.message = message
        this.title = title
        this.name = name
    }
  }
  
  let newsletters = [
    new Newsletter('Casa do cao', 'as novidades da casa do cao para o seu animal chegou', 'Nova promocao','Ricardo'),
    new Newsletter('Gato e c&a', 'nao perca novidade de seu felino', ' novissimos felinos','Sidnei'),
    new Newsletter('Animais domesticaveis', 'tudo o que voce precisa para o seu pet', 'Nova promocao','Ricardo')
  ]
  
  function getAll() {
    return newsletters;
  }
  
  function getOne(index) {
    return newsletters[index];
  }
  
  function create(estabelishment_category, message, title, name) {
    newsletters.push(
        new Newsletter(estabelishment_category, message, title, name)
    )
  }
  
  function update(estabelishment_category, message, title, name) {
    let newsletterObject = new Newsletter(estabelishment_category, message, title, name);
    newsletters = newsletters.map((newsletter, index) => {
        if (index === indexUpdate) {
            return newsletterObject;
        }
        return deletenewsletter;
    })
  }
  
  // Não podemos chamar apenas de 'delete', pois é uma palavra reservada
  function deletenewsletters(indexDelete) {
    newsletters.splice(indexDelete, 1)
  }
  
  module.exports.getAll = getAll;
  module.exports.getOne = getOne;
  module.exports.create = create;
  module.exports.update = update;
  module.exports.delete = deletenewsletters;