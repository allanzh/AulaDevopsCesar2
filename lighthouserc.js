module.exports = {
    ci: {
      collect: {
        url: ['http://cesar.school'],
        startServerCommand: 'rails server -e production',
      },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };