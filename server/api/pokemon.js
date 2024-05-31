export default defineEventHandler(async (event) => {
    try {
      const query = getQuery(event);

      if (query.number) {
        const pokemonNumber = query.number;
        return await $fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`);
      }

      return await $fetch('https://pokeapi.co/api/v2/pokemon');
    } catch (error) {
      throw createError({
        statusCode: 404,
        message: 'Something went wrong!',
      });
    }
});