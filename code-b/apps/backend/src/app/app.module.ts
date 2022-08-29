
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig, ApolloFederationDriver } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import Posts from './db/enitities/posts.enitity';
import { PostsModule } from './posts/posts.module';
import { PostsResolver } from './posts/posts.resolver';

@Module({
  imports: [PostsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloFederationDriver,
      debug: true,
      playground: true,
      autoSchemaFile: true,
    }),
    // this is the proper way
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: (configService: ConfigService) => ({
    //     type: 'postgres',
    //     host: configService.get('DB_HOST'),
    //     port: +configService.get<number>('DB_PORT'),
    //     username: configService.get('DB_USERNAME'),
    //     password: configService.get('DB_PASSWORD'),
    //     database: configService.get('DB_NAME'),
    //     entities: [],
    //     synchronize: true,
    //   }),
    //   inject: [ConfigService],
    // }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'root',
        password: 'secret',
        database: 'postgres',
        entities: [Posts],
        synchronize: true,
      }),
    }),
  ],
})
export class AppModule { }
